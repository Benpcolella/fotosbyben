const fs = require('fs');

// Get all root images
const rootImages = fs.readdirSync('.')
  .filter(f => /\.(jpg|JPG|jpeg)$/i.test(f))
  .sort();

// Get TBD Culture Rituals images
const tbdImages = fs.readdirSync('./TBD Culture Rituals')
  .filter(f => /\.(jpg|JPG)$/i.test(f))
  .map(f => `TBD Culture Rituals/${f}`)
  .sort();

// Combine all images
const allImages = [...rootImages, ...tbdImages];

console.log(`Total images: ${allImages.length}`);
console.log("\n        const images = [");
allImages.forEach((img, idx) => {
  const comma = idx < allImages.length - 1 ? ',' : '';
  console.log(`            '${img}'${comma}`);
});
console.log("        ];");
