import { NextResponse } from 'next/server';
import Database from 'better-sqlite3';
import path from 'path';

export async function POST(req: Request) {
  try {
    const data = await req.json();
    
    // Connect to SQLite directly
    const dbPath = path.join(process.cwd(), 'prisma', 'dev.db');
    const db = new Database(dbPath);
    
    db.exec(`
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
    `);

    const stmt = db.prepare(`
      INSERT INTO Intake (id, firstName, lastName, email, address, city, zipCode, idImage, scriptImage)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

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
