import re

# 1. Update Blog Page to show all 100
with open('src/app/blog/page.tsx', 'r', encoding='utf-8') as f:
    blog_content = f.read()

blog_content = blog_content.replace('blogs.slice(0, 15).map', 'blogs.map')
with open('src/app/blog/page.tsx', 'w', encoding='utf-8') as f:
    f.write(blog_content)


# 2. Update FAQ Page to show all 100
with open('src/app/faq/page.tsx', 'r', encoding='utf-8') as f:
    faq_content = f.read()

faq_content = faq_content.replace('faqs.slice(0, 20).map', 'faqs.map')
with open('src/app/faq/page.tsx', 'w', encoding='utf-8') as f:
    f.write(faq_content)


# 3. Update NavBar to show all links on all sites
with open('src/components/NavBar.tsx', 'r', encoding='utf-8') as f:
    nav_content = f.read()

# Add Medications to Local Sites Desktop Menu
old_local_desktop = '''          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-300">
            <Link href="/services" className="hover:text-white transition">Services</Link>'''
new_local_desktop = '''          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-slate-300">
            <Link href="/medications" className="hover:text-white transition">Medications</Link>
            <Link href="/services" className="hover:text-white transition">Services</Link>'''
nav_content = nav_content.replace(old_local_desktop, new_local_desktop)

# Add Medications to Local Sites Mobile Menu
old_local_mobile = '''            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link href="/services" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Services</Link>'''
new_local_mobile = '''            <div className="px-4 pt-2 pb-6 space-y-2 flex flex-col">
              <Link href="/medications" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Medications</Link>
              <Link href="/services" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-700">Services</Link>'''
nav_content = nav_content.replace(old_local_mobile, new_local_mobile)

# Add Blog and FAQ to Main Site Desktop Menu
old_main_desktop = '''          <Link href="/medications" className="hover:text-indigo-600 transition">Medications</Link>
          <Link href="/prescriptions" className="hover:text-indigo-600 transition">Prescriptions</Link>'''
new_main_desktop = '''          <Link href="/medications" className="hover:text-indigo-600 transition">Medications</Link>
          <Link href="/prescriptions" className="hover:text-indigo-600 transition">Prescriptions</Link>
          <Link href="/blog" className="hover:text-indigo-600 transition">Health Blog</Link>
          <Link href="/faq" className="hover:text-indigo-600 transition">FAQ</Link>'''
nav_content = nav_content.replace(old_main_desktop, new_main_desktop)

# Add Blog and FAQ to Main Site Mobile Menu
old_main_mobile = '''            <Link href="/medications" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Medications</Link>
            <Link href="/prescriptions" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Prescriptions</Link>'''
new_main_mobile = '''            <Link href="/medications" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Medications</Link>
            <Link href="/prescriptions" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Prescriptions</Link>
            <Link href="/blog" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">Health Blog</Link>
            <Link href="/faq" onClick={toggleMenu} className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50">FAQ</Link>'''
nav_content = nav_content.replace(old_main_mobile, new_main_mobile)

with open('src/components/NavBar.tsx', 'w', encoding='utf-8') as f:
    f.write(nav_content)

print("Navbar, Blog, and FAQ updated!")
