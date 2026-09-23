import re

email = "pharmacy@mailorderpharmacy.io"
form_tag = f'<form action="https://formsubmit.co/{email}" method="POST" enctype="multipart/form-data" className="space-y-6">'

# 1. Update checkout page
with open('src/app/checkout/page.tsx', 'r', encoding='utf-8') as f:
    checkout = f.read()

checkout = checkout.replace('<form onSubmit={handleSubmit} className="space-y-6">', form_tag + '\n<input type="hidden" name="_subject" value="New Checkout Order" />\n<input type="hidden" name="_next" value="https://mailorderpharmacy.io/" />')

with open('src/app/checkout/page.tsx', 'w', encoding='utf-8') as f:
    f.write(checkout)

# 2. Update prescriptions page
with open('src/app/prescriptions/page.tsx', 'r', encoding='utf-8') as f:
    prescriptions = f.read()

# We need to change the file input name attribute to "prescription_file" 
# and the form tag to point to formsubmit
prescriptions = prescriptions.replace('<form onSubmit={handleUpload} className="space-y-6">', form_tag + '\n<input type="hidden" name="_subject" value="New Prescription Upload" />\n<input type="hidden" name="_next" value="https://mailorderpharmacy.io/" />')
prescriptions = prescriptions.replace('type="file"', 'type="file"\n                  name="prescription_file"')

with open('src/app/prescriptions/page.tsx', 'w', encoding='utf-8') as f:
    f.write(prescriptions)

print("Forms successfully wired to formsubmit!")
