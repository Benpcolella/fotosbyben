const fs = require('fs');
const path = require('path');

const directories = [
  '00. Overarching',
  '01. Icons & skylines',
  '02. Urban Life',
  '03. Movement',
  '04. Structures',
  '05. Lanscapes',
  '06. Quiet Moments',
  '07. Obscurae'
];

const galleryIds = [
  'gallery-overarching',
  'gallery-icons-skylines',
  'gallery-urban-life',
  'gallery-movement',
  'gallery-structures',
  'gallery-landscapes',
  'gallery-quiet-moments',
  'gallery-obscurae'
];

const imageData = {};

// Build overarching gallery with one sample from each folder
const overarchingSamples = [];

directories.forEach((dir, index) => {
  const galleryId = galleryIds[index];
  const files = fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .sort();
  
  imageData[galleryId] = files.map(f => ({
    src: `${dir}/${f}`,
    alt: 'Photograph'
  }));
  
  // Add first file from each collection to overarching
  if (files.length > 0) {
    overarchingSamples.push({
      src: `${dir}/${files[0]}`,
      alt: 'Photograph'
    });
  }
});

// Insert overarching at the beginning
imageData['gallery-overarching'] = overarchingSamples;

// Generate JavaScript code
console.log('const imageData = {');
Object.keys(imageData).forEach((key, idx) => {
  console.log(`    '${key}': [`);
  imageData[key].forEach((img, imgIdx) => {
    const comma = imgIdx < imageData[key].length - 1 ? ',' : '';
    console.log(`        { src: '${img.src}', alt: '${img.alt}' }${comma}`);
  });
  const comma = idx < Object.keys(imageData).length - 1 ? ',' : '';
  console.log(`    ]${comma}`);
});
console.log('};');
