const fs = require('fs');

const routeCode = `import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Connect to SQLite directly
    const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
    const db = new Database(dbPath);
    
    db.exec(\`
      CREATE TABLE IF NOT EXISTS Intake (
        id TEXT PRIMARY KEY,
        firstName TEXT,
        lastName TEXT,
        email TEXT,
        address TEXT,
        city TEXT,
        zipCode TEXT,
        idImage TEXT,
        scriptImage TEXT,
        status TEXT DEFAULT 'pending',
        createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    \`);

    const stmt = db.prepare(\`
      INSERT INTO Intake (id, firstName, lastName, email, address, city, zipCode, idImage, scriptImage)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    \`);

    const id = 'intk_' + Math.random().toString(36).substr(2, 9);
    stmt.run(
      id, 
      data.firstName, 
      data.lastName, 
      data.email, 
      data.address, 
      data.city, 
      data.zipCode,
      data.idImage || 'Missing',
      data.scriptImage || 'Missing'
    );
    
    db.close();

    return NextResponse.json({ success: true, id });
  } catch (error) {
    console.error('Intake Error:', error);
    return NextResponse.json({ success: false, error: 'Database Error' }, { status: 500 });
  }
}
`;

const dashboardCode = `import Database from 'better-sqlite3';
import path from 'path';
import { ShieldCheck, User, Calendar, FileText, CheckCircle, FileImage } from 'lucide-react';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function PharmacistDashboard() {
  const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
  const db = new Database(dbPath);
  
  db.exec(\`
    CREATE TABLE IF NOT EXISTS Intake (
      id TEXT PRIMARY KEY,
      firstName TEXT, lastName TEXT, email TEXT,
      address TEXT, city TEXT, zipCode TEXT,
      idImage TEXT, scriptImage TEXT,
      status TEXT DEFAULT 'pending',
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  \`);

  const intakes = db.prepare('SELECT * FROM Intake ORDER BY createdAt DESC LIMIT 50').all();
  db.close();

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900">Pharmacist Daily Report</h1>
            <p className="text-slate-500 mt-1">Review patient intake forms and attached medical documents.</p>
          </div>
          <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-lg border border-emerald-200">
            <ShieldCheck className="w-5 h-5" />
            <span className="font-semibold text-sm">HIPAA Secure Connection</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-sm font-semibold uppercase tracking-wider">
                  <th className="p-4">Patient Name</th>
                  <th className="p-4">Contact & Shipping</th>
                  <th className="p-4 text-center">Attached ID</th>
                  <th className="p-4 text-center">Prescription</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {intakes.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-slate-400">
                      <FileText className="w-12 h-12 mx-auto mb-3 opacity-20" />
                      <p>No intake forms submitted today.</p>
                    </td>
                  </tr>
                ) : (
                  intakes.map((intake: any) => (
                    <tr key={intake.id} className="hover:bg-slate-50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                            <User className="w-4 h-4" />
                          </div>
                          <span className="font-medium text-slate-900">{intake.firstName} {intake.lastName}</span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600">
                        <div className="font-medium text-sm text-slate-800">{intake.email}</div>
                        <div className="text-xs text-slate-500 mt-1">{intake.address}, {intake.city} {intake.zipCode}</div>
                      </td>
                      <td className="p-4 text-center">
                        {intake.idImage && intake.idImage !== 'Missing' ? (
                          <span className="inline-flex items-center gap-1 text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-emerald-100 transition-colors">
                            <FileImage className="w-3.5 h-3.5" /> View ID
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 italic">None</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {intake.scriptImage && intake.scriptImage !== 'Missing' ? (
                          <span className="inline-flex items-center gap-1 text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs font-semibold cursor-pointer hover:bg-blue-100 transition-colors">
                            <FileImage className="w-3.5 h-3.5" /> View Script
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 italic">None</span>
                        )}
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                          <CheckCircle className="w-3.5 h-3.5" />
                          {intake.status.toUpperCase()}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

fs.writeFileSync('src/app/api/intake/route.ts', routeCode);
fs.writeFileSync('src/app/pharmacist/dashboard/page.tsx', dashboardCode);