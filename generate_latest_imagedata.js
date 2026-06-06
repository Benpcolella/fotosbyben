const fs = require('fs');
const path = require('path');

// Get all directories in the current folder
const allDirs = fs.readdirSync('.')
  .filter(f => fs.statSync(f).isDirectory() && !f.startsWith('.'))
  .sort();

console.log('Found directories:', allDirs);

const imageData = {};
const overarchingSamples = [];

allDirs.forEach((dir) => {
  // Create gallery ID from directory name
  const galleryId = 'gallery-' + dir.toLowerCase().replace(/[\s&]/g, '-').replace(/--+/g, '-').replace(/^-|-$/g, '');
  
  try {
    const files = fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f))
      .sort();
    
    if (files.length > 0) {
      imageData[galleryId] = files.map(f => ({
        src: encodeURI(`${dir}/${f}`),
        alt: 'Photograph'
      }));
      
      // Add first file to overarching
      overarchingSamples.push({
        src: encodeURI(`${dir}/${files[0]}`),
        alt: 'Photograph'
      });
      
      console.log(`${dir}: ${files.length} images`);
    }
  } catch (e) {
    console.error(`Error reading ${dir}:`, e.message);
  }
});

// Insert overarching at the beginning
imageData['gallery-all'] = overarchingSamples;

// Generate JavaScript code
let output = '        const imageData = {\n';
Object.keys(imageData).forEach((key, idx) => {
  output += `            '${key}': [\n`;
  imageData[key].forEach((img, imgIdx) => {
    const comma = imgIdx < imageData[key].length - 1 ? ',' : '';
    output += `                { src: '${img.src}', alt: '${img.alt}' }${comma}\n`;
  });
  const comma = idx < Object.keys(imageData).length - 1 ? ',' : '';
  output += `            ]${comma}\n`;
});
output += '        };';

console.log('\n' + output);
