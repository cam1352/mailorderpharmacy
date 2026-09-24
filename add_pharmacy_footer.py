import re

with open('src/app/layout.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

footer_html = """
        <footer className="bg-slate-950 text-slate-400 py-12 mt-20 border-t border-slate-900 text-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Pharmacy</h4>
                <ul className="space-y-2">
                  <li><a href="/medications" className="hover:text-indigo-400 transition">Medications</a></li>
                  <li><a href="/prescriptions" className="hover:text-indigo-400 transition">Prescriptions</a></li>
                  <li><a href="/faq" className="hover:text-indigo-400 transition">FAQ</a></li>
                  <li><a href="/blog" className="hover:text-indigo-400 transition">Health Blog</a></li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Our Network</h4>
                <ul className="space-y-2 flex flex-col">
                  <li><a href="https://walkergeneralcontractors.ca" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Walker General Contractors</a></li>
                  <li><a href="https://vancouvercustomhome.ca" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Vancouver Custom Homes</a></li>
                  <li><a href="https://mailorderpharmacy.io" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">Mail Order Pharmacy</a></li>
                  <li><a href="https://calorietracker.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition">NutriSnap AI Tracker</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-xs">Contact</h4>
                <p>pharmacy@mailorderpharmacy.io</p>
                <p className="mt-2">Available 24/7 online</p>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-900 text-center text-xs">
              &copy; {new Date().getFullYear()} Mail Order Pharmacy. All rights reserved.
            </div>
          </div>
        </footer>
"""

content = content.replace('        </main>', '        </main>\n' + footer_html)

with open('src/app/layout.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Pharmacy Footer added!")
