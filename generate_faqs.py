import json

categories = [
    "Shipping & Delivery", "Prescriptions & Refills", 
    "Billing & Insurance", "Account & Privacy", "General Medical"
]

templates = [
    ("How long does it take to get {topic}?", "Usually it takes 1-2 business days depending on your location and the specific {topic} requested."),
    ("Is {topic} covered by insurance?", "Most major insurance plans cover {topic}. Please check with your provider for specific copay details."),
    ("What happens if I miss my delivery for {topic}?", "Our courier will attempt redelivery the next day. A signature may be required for sensitive {topic}."),
    ("Can I track my {topic}?", "Yes, you will receive a tracking link via email or SMS once your {topic} has been dispatched."),
    ("How do I update my {topic} information?", "You can update your {topic} settings directly from your patient dashboard under the Account section."),
    ("Are there extra fees for {topic}?", "Standard {topic} is included. Specialized or expedited {topic} may incur an additional fee."),
    ("Who reviews my {topic}?", "All {topic} are reviewed by licensed partner pharmacists to ensure clinical safety and accuracy."),
    ("Can I cancel my {topic}?", "You can cancel {topic} anytime before the pharmacy has begun processing your order."),
    ("Is my {topic} kept private?", "Absolutely. All data regarding your {topic} is encrypted end-to-end and HIPAA compliant."),
    ("Do you offer automatic {topic}?", "Yes, you can enroll in auto-renewals for {topic} to ensure you never run out of your medication.")
]

topics = [
    "medication", "prescription", "refill", "delivery", "insurance claim", 
    "consultation", "medical record", "payment", "billing profile", "shipment"
]

faqs = []

count = 1
while count <= 100:
    for cat in categories:
        for tpl in templates:
            for top in topics:
                if count > 100:
                    break
                q = tpl[0].format(topic=top)
                a = tpl[1].format(topic=top)
                
                # Make it unique if we somehow loop
                if not any(f['question'] == q for f in faqs):
                    faqs.append({
                        "id": count,
                        "category": cat,
                        "question": q,
                        "answer": a
                    })
                    count += 1
            if count > 100:
                break
        if count > 100:
            break

with open('src/data/faqs.json', 'w') as f:
    json.dump(faqs, f, indent=2)

print("Generated 100 FAQs.")
