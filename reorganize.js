const fs = require('fs');
const { execSync } = require('child_process');

const imageInfo = JSON.parse(fs.readFileSync('image_info.json', 'utf8'));

// Separate landscapes and portraits
const landscapes = imageInfo.filter(i => i.isLandscape);
const portraits = imageInfo.filter(i => !i.isLandscape);

console.log(`Landscapes: ${landscapes.length}, Portraits: ${portraits.length}\n`);

// Optimal arrangement: alternate landscape+portrait pairs, then 3-portrait rows
const arrangement = [];

// First, pair each landscape with a portrait
for (let i = 0; i < landscapes.length; i++) {
  arrangement.push(landscapes[i]);
  if (i < portraits.length) {
    arrangement.push(portraits[i]);
  }
}

// Add remaining portraits in groups of 3
const remainingPortraits = portraits.slice(landscapes.length);
for (let i = 0; i < remainingPortraits.length; i++) {
  arrangement.push(remainingPortraits[i]);
}

console.log(`Total arranged: ${arrangement.length}`);

// Generate rename commands and new image list
const renameCommands = [];
const newImageList = [];
let renamedCount = 0;

arrangement.forEach((img, idx) => {
  const newNum = String(idx + 1).padStart(3, '0');
  const ext = img.original.split('.').pop();
  const newName = `${newNum}.${ext}`;
  
  const source = img.original.includes('/') ? img.original : img.original;
  const fullSource = source;
  
  newImageList.push(newName);
  renamedCount++;
  
  console.log(`${renamedCount}. ${newName.padEnd(12)} ← ${img.original}`);
});

// Save the new list for HTML
fs.writeFileSync('new_image_list.json', JSON.stringify(newImageList, null, 2));
fs.writeFileSync('rename_mapping.json', JSON.stringify(arrangement.map((img, idx) => ({
  original: img.original,
  new: String(idx + 1).padStart(3, '0') + '.' + img.original.split('.').pop()
})), null, 2));

console.log(`\nNew order saved. Ready to rename.`);
