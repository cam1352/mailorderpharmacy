const fs = require('fs');
const path = require('path');

const medsPath = path.join(__dirname, 'src/data/medications.json');
const blogsPath = path.join(__dirname, 'src/data/blogs.json');
const faqsPath = path.join(__dirname, 'src/data/faqs.json');

const DISCLAIMER = " [COMPLIANCE NOTE: This material is for informational purposes only and is not intended as medical advice. Please consult a healthcare professional before starting any treatment.]";

function applyDisclaimer(filePath, fields) {
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    let violations = 0;

    const modified = data.map(item => {
      let needsDisclaimer = false;
      fields.forEach(f => {
        if (item[f] && typeof item[f] === 'string' && !item[f].includes("COMPLIANCE NOTE")) {
          // If the content makes medical claims without a disclaimer, append it.
          if (item[f].match(/(cure|treat|diagnose|prevent|medical advice)/i)) {
            item[f] += DISCLAIMER;
            needsDisclaimer = true;
          }
        }
      });
      if (needsDisclaimer) violations++;
      return item;
    });

    fs.writeFileSync(filePath, JSON.stringify(modified, null, 2));
    console.log(`Compliance check completed for ${path.basename(filePath)}. Applied disclaimer to ${violations} items.`);
  }
}

applyDisclaimer(medsPath, ['description', 'safety_info']);
applyDisclaimer(blogsPath, ['content']);
applyDisclaimer(faqsPath, ['content']);
