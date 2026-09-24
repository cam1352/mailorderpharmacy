import re

with open('src/components/NavBar.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the Order Prescriptions external link with an internal See a Pharmacist link for the City Desktop nav
content = content.replace('<a href="https://mailorderpharmacy.io" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-indigo-700 transition">\n              Order Prescriptions\n            </a>',
                          '<Link href="/prescriptions" className="bg-indigo-600 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-indigo-700 transition">\n              See a Pharmacist\n            </Link>')

# Replace for Mobile nav
content = content.replace('<a href="https://mailorderpharmacy.io" className="mt-4 block text-center bg-indigo-600 text-white px-5 py-3 rounded-lg font-bold text-base hover:bg-indigo-700 transition">\n                Order Prescriptions\n              </a>',
                          '<Link href="/prescriptions" className="mt-4 block text-center bg-indigo-600 text-white px-5 py-3 rounded-lg font-bold text-base hover:bg-indigo-700 transition">\n                See a Pharmacist\n              </Link>')

with open('src/components/NavBar.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("NavBar updated!")
