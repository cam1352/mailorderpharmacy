import re
for file in ['src/app/checkout/page.tsx', 'src/app/prescriptions/page.tsx']:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    content = content.replace('enctype="multipart/form-data"', 'encType="multipart/form-data"')
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)
print("Fixed encType typos")
