import json
import random

prefixes = ["Lisin", "Amlodi", "Metfor", "Atorva", "Levo", "Omepra", "Simvas", "Losa", "Albut", "Gaba", "Hydro", "Sertra", "Montel", "Fluti", "Amoxi", "Furo", "Panto", "Esci", "Traz", "Rosuva"]
suffixes = ["opril", "pine", "min", "statin", "thyroxine", "zole", "artan", "erol", "pentin", "codone", "raline", "kast", "casone", "cillin", "semide", "pram", "done"]

uses = [
    "Used to treat high blood pressure and heart failure.",
    "Used to improve blood sugar control in adults with type 2 diabetes.",
    "Used to lower cholesterol and triglyceride levels in the blood.",
    "Used to treat an underactive thyroid (hypothyroidism).",
    "Used to treat certain stomach and esophagus problems (such as acid reflux, ulcers).",
    "Used to prevent and treat wheezing and shortness of breath caused by breathing problems.",
    "Used to treat pain caused by nerve damage due to diabetes, shingles infection, or spinal cord injury.",
    "Used to relieve moderate to severe pain.",
    "Used to treat depression, obsessive-compulsive disorder (OCD), panic disorder.",
    "Used to prevent asthma attacks and for the long-term treatment of asthma.",
    "Used to treat a wide variety of bacterial infections.",
    "Used to reduce extra fluid in the body (edema) caused by conditions such as heart failure, liver disease, and kidney disease."
]

safety_infos = [
    "Do not use if pregnant. May cause dizziness or lightheadedness.",
    "Take with meals to reduce stomach upset. Monitor kidney function.",
    "Avoid grapefruit juice. May cause muscle pain or weakness.",
    "Take on an empty stomach, 30-60 minutes before breakfast.",
    "May increase the risk of bone fractures if used long-term.",
    "May cause nervousness, shaking, or rapid heartbeat.",
    "Can cause drowsiness or dizziness. Avoid alcohol.",
    "High potential for abuse and dependence. Do not share with others.",
    "May increase suicidal thoughts in some individuals. Monitor mood changes.",
    "May cause mood or behavior changes.",
    "Complete the full course of treatment. May cause diarrhea.",
    "May cause dehydration and electrolyte imbalance. Drink plenty of fluids."
]

compounds = [
    "C21H31N3O5", "C20H25ClN2O5", "C4H11N5", "C33H35FN2O5", "C15H11I4NO4",
    "C17H19N3O3S", "C25H38O5", "C22H23ClN4O", "C13H21NO3", "C9H17NO2",
    "C18H21NO3", "C17H17Cl2N", "C35H36ClNO3S", "C25H31F3O5S", "C16H19N3O5S"
]

shapes = ["Round", "Oval", "Capsule", "Oblong"]
colors = ["White", "Yellow", "Blue", "Pink", "Red", "Green", "Orange"]

medications = []

for i in range(1, 801):
    name = random.choice(prefixes) + random.choice(suffixes)
    use_idx = random.randint(0, len(uses) - 1)
    dosage = f"{random.choice([5, 10, 20, 25, 40, 50, 100, 200, 500])} mg"
    
    # Generate a specific image for the product using placehold.co
    safe_name = name.capitalize().replace(' ', '+')
    safe_dosage = dosage.replace(' ', '+')
    image_url = f"https://placehold.co/600x400/eef2ff/3730a3?text={safe_name}\\n{safe_dosage}"
    
    med = {
        "id": f"med_{i:04d}",
        "name": name.capitalize(),
        "dosage": dosage,
        "description": uses[use_idx],
        "safety_info": safety_infos[use_idx],
        "compound": random.choice(compounds),
        "pill_shape": random.choice(shapes),
        "pill_color": random.choice(colors),
        "image_url": image_url
    }
    medications.append(med)

seen_names = set()
for med in medications:
    original_name = med["name"]
    name = original_name
    count = 2
    while name in seen_names:
        name = f"{original_name} {count}"
        count += 1
    med["name"] = name
    seen_names.add(name)

with open('src/data/medications.json', 'w') as f:
    json.dump(medications, f, indent=2)

print("Generated src/data/medications.json with 300 records.")
