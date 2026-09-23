import json
import os

# Create 100 Master FAQs with city placeholders
faqs = []
for i in range(1, 101):
    faqs.append({
        "id": f"faq-{i}",
        "question": f"How long does prescription delivery take in {{city}}?",
        "answer": f"Our typical delivery time for residents in {{city}} is under 24 hours. We coordinate with local couriers in the {{city}} area to ensure your medications arrive safely and securely.",
        "category": "Shipping" if i % 2 == 0 else "Prescriptions"
    })

# Create 100 Master Blogs with city placeholders
blogs = []
blog_topics = ["Managing Diabetes", "Heart Health", "Mental Wellness", "Cold & Flu Season", "Vitamins & Supplements"]
for i in range(1, 101):
    topic = blog_topics[i % len(blog_topics)]
    blogs.append({
        "slug": f"guide-to-{topic.lower().replace(' ', '-')}-{i}",
        "title": f"The Complete Guide to {topic} in {{city}}",
        "excerpt": f"Navigating {topic.lower()} can be challenging. Here is how our mail order pharmacy is helping patients across {{city}}.",
        "content": f"As the premier mail order pharmacy serving {{city}}, we see many patients looking for better ways to manage their {topic.lower()}. \n\nGetting your prescriptions delivered in {{city}} means less time waiting in lines and more time focusing on your health. Whether you live downtown or in the suburbs of {{city}}, our system ensures your medications are always in stock."
    })

# Save to data directory
os.makedirs("src/data", exist_ok=True)
with open("src/data/faqs.json", "w", encoding="utf-8") as f:
    json.dump(faqs, f, indent=2)

with open("src/data/blogs.json", "w", encoding="utf-8") as f:
    json.dump(blogs, f, indent=2)

print("Generated 100 Master FAQs and 100 Master Blogs successfully.")