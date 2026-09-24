import re

# 1. Update src/app/page.tsx
with open("src/app/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("Easy Checkout", "Direct Connection")
content = content.replace("Pay securely online with your credit card.", "Your request is securely routed to a licensed local pharmacist.")
content = content.replace('href="/checkout"', 'href="/prescriptions"')
content = content.replace('Go to Checkout', 'Connect with Pharmacist')
content = content.replace("upload your prescriptions, and checkout in under 2 minutes.", "upload your prescriptions, and connect with a pharmacist in under 2 minutes.")

# Fix the CreditCard icon
content = content.replace("<CreditCard ", "<Pill ") # It's using Pill above, let's just use FileText or something if Pill is used. Wait, Pill is used for Medication Database. Let's use `import { Pill, FileText, Activity } from 'lucide-react'` and use Activity.

with open("src/app/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

# 2. Update NavBar.tsx
with open("src/components/NavBar.tsx", "r", encoding="utf-8") as f:
    nav = f.read()

# Remove the checkout links
nav = re.sub(r'<Link href="/checkout".*?>Checkout</Link>\n?', '', nav)

with open("src/components/NavBar.tsx", "w", encoding="utf-8") as f:
    f.write(nav)

print("Updated page.tsx and NavBar.tsx")
