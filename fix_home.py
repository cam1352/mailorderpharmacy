import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the conditional return logic
old_logic = """  // Localized SEO Pages
  if (host.includes('pharmacytoronto.ca')) {
    return <CityLandingPage city="Toronto" domain="pharmacytoronto.ca" />;
  }
  if (host.includes('pharmacyvancouver.ca')) {
    return <CityLandingPage city="Vancouver" domain="pharmacyvancouver.ca" />;
  }
  if (host.includes('pharmacycalgary.ca')) {
    return <CityLandingPage city="Calgary" domain="pharmacycalgary.ca" />;
  }"""

new_logic = """  let displayCity = 'Mail Order';
  if (host.includes('toronto')) displayCity = 'Toronto';
  if (host.includes('vancouver')) displayCity = 'Vancouver';
  if (host.includes('calgary')) displayCity = 'Calgary';"""

content = content.replace(old_logic, new_logic)

# Replace the H1
content = content.replace('Welcome to Mail Order Pharmacy', 'Welcome to {displayCity} Pharmacy')
# Add the 'See a Pharmacist' CTA
content = content.replace('<h2 className="text-4xl font-extrabold mb-4">How to Navigate Our Platform</h2>', '<h2 className="text-4xl font-extrabold mb-4">How to Navigate Our Platform</h2>\n            <div className="flex justify-center mb-6"><Link href="/prescriptions" className="bg-white text-indigo-900 px-8 py-3 rounded-full font-bold shadow-lg hover:bg-slate-100 transition-colors">See a Pharmacist</Link></div>')

# Remove the CityLandingPage definition entirely
content = re.sub(r'// Sub-component for Localized SEO Landing Pages.*', '', content, flags=re.DOTALL)

with open('src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Home page updated!")
