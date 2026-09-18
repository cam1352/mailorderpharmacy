import json
import random

titles = [
    "The Future of Online Pharmacy Delivery",
    "5 Tips for Managing Multiple Prescriptions",
    "Understanding Your Health Insurance Co-Pays",
    "Why You Should Transfer to a Digital Pharmacy",
    "The Importance of Medication Adherence",
    "How to Safely Store Your Medications at Home",
    "Navigating Cold and Flu Season",
    "The Role of a Pharmacist in Your Healthcare Team",
    "What Are Generic Drugs? A Comprehensive Guide",
    "How We Ensure HIPAA Compliance in Delivery",
    "Top 10 Questions to Ask Your Pharmacist",
    "Managing Chronic Conditions with Auto-Refills",
    "The Dangers of Mixing Supplements and Prescriptions",
    "How Technology is Changing the Pharmacy Experience",
    "A Guide to Heart Health and Medication",
    "Understanding Blood Pressure Medications",
    "Tips for Traveling with Prescription Drugs",
    "How to Dispose of Expired Medications Safely",
    "The Benefits of Pill Packaging and Sorting",
    "Demystifying Pharmacy Wait Times"
]

content_template = """
Welcome to our latest health update. Managing your health is our top priority, and we want to ensure you have the best information available regarding your medications and general wellness.

In today's fast-paced world, understanding the intricacies of healthcare and pharmacy services is more important than ever. Whether you are dealing with chronic conditions, managing multiple prescriptions for a family member, or simply trying to stay healthy during flu season, knowledge is your best defense.

### The Core Issue
Many patients struggle with understanding the complexities of modern medicine. From confusing insurance co-pays to remembering when to take a specific pill, the daily management of healthcare can be overwhelming. That is why our online pharmacy platform was built: to simplify the process. By utilizing digital tools, auto-refills, and direct-to-door delivery, we remove the friction from getting the medication you need.

### Key Takeaways
- Always consult with your licensed pharmacist before making changes to your regimen.
- Keep your medications stored in a cool, dry place away from direct sunlight.
- Take advantage of digital reminders and auto-refill programs to ensure medication adherence.
- Never hesitate to ask questions about generic alternatives, which are often just as effective as brand-name drugs but significantly cheaper.

### Looking Ahead
We are constantly innovating to bring you better care. Our partnered network of licensed pharmacists is always available to answer your questions, securely and privately. Remember, your health journey is a marathon, not a sprint, and we are here to support you every step of the way.

For more information, feel free to reach out to our support team or consult your primary care physician. Stay healthy!
"""

blogs = []

for i, title in enumerate(titles):
    slug = title.lower().replace(" ", "-").replace("?", "").replace(",", "")
    blogs.append({
        "id": i + 1,
        "title": title,
        "slug": slug,
        "date": f"September {random.randint(1, 13)}, 2026",
        "author": "Dr. Sarah Jenkins, PharmD",
        "excerpt": "Learn more about managing your health, understanding your prescriptions, and how our online pharmacy delivery service can make your life easier.",
        "content": content_template
    })

with open('src/data/blogs.json', 'w') as f:
    json.dump(blogs, f, indent=2)

print("Generated 20 blogs.")
