const fs = require('fs');

const galleries = {
  '00. Overarching': 'gallery-overarching',
  '01. Icons & skylines': 'gallery-icons-skylines',
  '02. Urban Life': 'gallery-urban-life',
  '03. Movement': 'gallery-movement',
  '04. Structures': 'gallery-structures',
  '05. Lanscapes': 'gallery-landscapes',
  '06. Quiet Moments': 'gallery-quiet-moments',
  'TBD Culture Rituals': 'gallery-tbd-culture-rituals'
};

const imageData = {};
const allSamples = [];

Object.entries(galleries).forEach(([dir, galleryId]) => {
  try {
    const files = fs.readdirSync(dir)
      .filter(f => /\.(jpg|jpeg|png|JPG|JPEG|PNG)$/i.test(f))
      .sort();
    
    imageData[galleryId] = files.map(f => ({
      src: encodeURI(`${dir}/${f}`),
      alt: 'Photograph'
    }));
    
    if (files.length > 0) {
      allSamples.push({
        src: encodeURI(`${dir}/${files[0]}`),
        alt: 'Photograph'
      });
    }
    console.log(`${dir}: ${files.length} images`);
  } catch (e) {
    console.log(`Skipping ${dir}: ${e.message}`);
  }
});

imageData['gallery-all'] = allSamples;

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
