const Database = require('better-sqlite3');
const fs = require('fs');
const path = require('path');

const db = new Database('prisma/dev.db');

// Create tables
db.exec(`
  CREATE TABLE IF NOT EXISTS Medication (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    dosage TEXT NOT NULL,
    description TEXT NOT NULL,
    safetyInfo TEXT NOT NULL,
    compound TEXT NOT NULL,
    pillShape TEXT NOT NULL,
    pillColor TEXT NOT NULL,
    imageUrl TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS Blog (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    date TEXT NOT NULL,
    content TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS FAQ (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    content TEXT NOT NULL,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log("Created tables. Starting seed...");

// Seed Meds
const medsPath = path.join(__dirname, 'src/data/medications.json');
if (fs.existsSync(medsPath)) {
  const meds = JSON.parse(fs.readFileSync(medsPath, 'utf8'));
  const insertMed = db.prepare('INSERT OR IGNORE INTO Medication (id, name, dosage, description, safetyInfo, compound, pillShape, pillColor, imageUrl) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)');
  const updateMed = db.prepare('UPDATE Medication SET name=?, dosage=?, description=?, safetyInfo=?, compound=?, pillShape=?, pillColor=?, imageUrl=? WHERE id=?');
  
  db.transaction(() => {
    for (const m of meds) {
      const res = insertMed.run(m.id, m.name, m.dosage, m.description, m.safety_info, m.compound, m.pill_shape, m.pill_color, m.image_url);
      if (res.changes === 0) {
        updateMed.run(m.name, m.dosage, m.description, m.safety_info, m.compound, m.pill_shape, m.pill_color, m.image_url, m.id);
      }
    }
  })();
  console.log(`Seeded ${meds.length} medications.`);
}

// Seed Blogs
const blogsPath = path.join(__dirname, 'src/data/blogs.json');
if (fs.existsSync(blogsPath)) {
  const blogs = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));
  const insertBlog = db.prepare('INSERT OR IGNORE INTO Blog (id, title, slug, date, content) VALUES (?, ?, ?, ?, ?)');
  const updateBlog = db.prepare('UPDATE Blog SET title=?, slug=?, date=?, content=? WHERE id=?');

  db.transaction(() => {
    for (const b of blogs) {
      const res = insertBlog.run(b.id, b.title, b.slug, b.date, b.content);
      if (res.changes === 0) {
        updateBlog.run(b.title, b.slug, b.date, b.content, b.id);
      }
    }
  })();
  console.log(`Seeded ${blogs.length} blogs.`);
}

// Seed FAQs
const faqsPath = path.join(__dirname, 'src/data/faqs.json');
if (fs.existsSync(faqsPath)) {
  const faqs = JSON.parse(fs.readFileSync(faqsPath, 'utf8'));
  const insertFaq = db.prepare('INSERT OR IGNORE INTO FAQ (id, title, slug, content) VALUES (?, ?, ?, ?)');
  const updateFaq = db.prepare('UPDATE FAQ SET title=?, slug=?, content=? WHERE id=?');

  db.transaction(() => {
    for (const f of faqs) {
      const res = insertFaq.run(f.id, f.title, f.slug, f.content);
      if (res.changes === 0) {
        updateFaq.run(f.title, f.slug, f.content, f.id);
      }
    }
  })();
  console.log(`Seeded ${faqs.length} FAQs.`);
}

console.log("Database seeded successfully.");
