const fs = require('fs');
const path = require('path');

// Get root images in filesystem order (not sorted)
const rootImages = fs.readdirSync('.')
  .filter(f => /\.(jpg|JPG|jpeg)$/i.test(f));

// Get TBD Culture Rituals images
const tbdImages = fs.readdirSync('./TBD Culture Rituals')
  .filter(f => /\.(jpg|JPG)$/i.test(f))
  .map(f => `TBD Culture Rituals/${f}`);

// Combine in folder order
const allImages = [...rootImages, ...tbdImages];

console.log(`Total images: ${allImages.length}\n`);
console.log("        const images = [");
allImages.forEach((img, idx) => {
  const comma = idx < allImages.length - 1 ? ',' : '';
  console.log(`            '${img}'${comma}`);
});
console.log("        ];");
