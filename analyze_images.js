const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const images = [
    '8BB6267F-0B77-4520-A6B9-8A4BFE3BEDD9.jpg',
    'BKU13_Original.JPG',
    'IMG_0076.jpg',
    'IMG_0261.jpg',
    'IMG_0293.jpg',
    'IMG_0490.jpg',
    'IMG_0497.jpg',
    'IMG_05842.jpg',
    'IMG_0588.jpg',
    'IMG_0688.jpg',
    'IMG_1239.jpg',
    'IMG_1274.jpg',
    'IMG_1437.jpg',
    'IMG_1452.jpg',
    'IMG_1454.jpg',
    'IMG_1670.jpg',
    'IMG_1976.jpg',
    'IMG_2207.jpg',
    'IMG_2235.jpg',
    'IMG_2387.jpg',
    'IMG_2469.jpg',
    'IMG_2761.jpg',
    'IMG_2878.jpg',
    'IMG_3079.jpg',
    'IMG_3099.jpg',
    'IMG_3225.jpg',
    'IMG_3247-2.jpg',
    'IMG_3381.jpg',
    'IMG_3487.jpg',
    'IMG_3543.jpg',
    'IMG_36382.jpg',
    'IMG_4764.jpg',
    'IMG_4948.jpg',
    'IMG_5011.jpg',
    'IMG_5031.jpg',
    'IMG_5214.jpg',
    'IMG_5256.jpg',
    'IMG_5295.jpg',
    'IMG_5308-2.jpg',
    'IMG_5372.jpg',
    'IMG_5374.jpg',
    'IMG_5507.jpg',
    'IMG_5599.jpg',
    'IMG_5603.jpg',
    'IMG_5693.jpg',
    'IMG_5758.jpg',
    'IMG_5772.jpg',
    'IMG_5855.jpg',
    'IMG_5951.jpg',
    'IMG_6030.jpg',
    'IMG_6087.jpg',
    'IMG_6116.jpg',
    'IMG_6175.jpg',
    'IMG_6411.JPG',
    'IMG_6511.jpg',
    'IMG_6688.jpg',
    'IMG_6925.jpg',
    'IMG_7008.jpg',
    'IMG_7009.jpg',
    'IMG_7064.jpg',
    'IMG_7494.jpg',
    'IMG_7556.jpg',
    'IMG_7654.jpg',
    'IMG_7681.jpg',
    'IMG_7794.jpg',
    'IMG_7887.jpg',
    'IMG_8351.jpg',
    'IMG_8712_1.jpg',
    'IMG_8739.jpg',
    'IMG_8778.jpg',
    'IMG_8978.jpg',
    'IMG_9133.jpg',
    'IMG_9196.jpg',
    'IMG_9217.jpg',
    'IMG_92382.jpg',
    'IMG_9318c.jpg',
    'IMG_9598c.jpg',
    'IMG_9600.jpg',
    'IMG_9603.jpg',
    'IMG_9617.jpg',
    'IMG_9692.jpg',
    'IMG_9704.jpg',
    'IMG_9774.jpg',
    'IMG_9787.jpg',
    'IMG_9941.jpg',
    'KZB1.jpeg',
    'NY73.jpg',
    'bku36_Original.JPG',
    'bku39_Original.JPG',
    'tbs137.jpg',
    'tbs49.jpg',
    'TBD Culture Rituals/IMG_4764.jpg',
    'TBD Culture Rituals/IMG_5212.jpg',
    'TBD Culture Rituals/IMG_5214.jpg',
    'TBD Culture Rituals/IMG_6917.jpg'
];

const imageInfo = [];

images.forEach(img => {
  try {
    const identify = execSync(`identify -format "%w %h" "optimized/${img}" 2>/dev/null || identify -format "%w %h" "${img}" 2>/dev/null`).toString().trim();
    const [width, height] = identify.split(' ').map(Number);
    const isLandscape = width > height;
    imageInfo.push({
      original: img,
      width,
      height,
      isLandscape,
      aspect: (width / height).toFixed(2)
    });
  } catch (e) {
    console.error(`Error reading ${img}`);
  }
});

// Count landscape vs portrait
const landscapes = imageInfo.filter(i => i.isLandscape).length;
const portraits = imageInfo.filter(i => !i.isLandscape).length;

console.log(`\nTotal images: ${imageInfo.length}`);
console.log(`Landscape (2-col): ${landscapes}`);
console.log(`Portrait (1-col): ${portraits}`);
console.log(`\nOptimal arrangement for 3-column grid:`);
console.log(`Rows with 1 landscape + 1 portrait: ~${Math.min(landscapes, portraits)}`);
console.log(`Rows with 3 portraits: ~${Math.ceil(Math.max(0, portraits - Math.min(landscapes, portraits)) / 3)}`);

// Save info for next step
fs.writeFileSync('image_info.json', JSON.stringify(imageInfo, null, 2));
console.log('\nImage info saved to image_info.json');
