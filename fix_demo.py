with open("src/app/demo/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("Checkout & Delivery", "Pharmacist Connection")
content = content.replace("Checkout", "Connect")
content = content.replace("Pay securely online", "Send your details securely")

with open("src/app/demo/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Updated demo page")
