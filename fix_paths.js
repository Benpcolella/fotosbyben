const fs = require('fs');

// Read the HTML file
const html = fs.readFileSync('index.html', 'utf8');

// Function to encode paths
function encodePath(path) {
  return path.split('/').map(part => encodeURIComponent(part)).join('/');
}

// Replace all image paths with encoded versions
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

let updated = html;

directories.forEach(dir => {
  const files = fs.readdirSync(dir)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f))
    .sort();
  
  files.forEach(file => {
    const original = `'${dir}/${file}'`;
    const encoded = `'${encodePath(dir + '/' + file)}'`;
    updated = updated.replaceAll(original, encoded);
  });
});

fs.writeFileSync('index.html', updated);
console.log('Updated all image paths with URL encoding');
