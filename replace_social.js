const fs = require('fs');
const path = require('path');

const files = [
  'src/app/Components/Home/Footer.tsx',
  'src/app/Components/AboutUs/Footer.tsx',
  'src/app/Components/Footer.tsx',
  'src/app/Components/Policy/Footer.tsx'
];

files.forEach(file => {
  if (!fs.existsSync(file)) return;
  let content = fs.readFileSync(file, 'utf8');

  // Replace Instagram URLs
  content = content.replace(/href="https:\/\/www\.instagram\.com\/[^"]+"/g, 'href="https://www.instagram.com/hubinterior.india?igsh=Z2c0Z2tjYm9uMXFw"');
  content = content.replace(/href="https:\/\/instagram\.com"/g, 'href="https://www.instagram.com/hubinterior.india?igsh=Z2c0Z2tjYm9uMXFw"');

  // Replace Facebook URLs
  content = content.replace(/href="https:\/\/www\.facebook\.com\/[^"]+"/g, 'href="https://www.facebook.com/hubinteriorofficial"');
  content = content.replace(/href="https:\/\/facebook\.com"/g, 'href="https://www.facebook.com/hubinteriorofficial"');

  // Replace YouTube URLs
  content = content.replace(/href="https:\/\/www\.youtube\.com\/@[^"]+"/g, 'href="https://www.youtube.com/@hubinterior"');
  content = content.replace(/href="https:\/\/youtube\.com"/g, 'href="https://www.youtube.com/@hubinterior"');

  // Remove Twitter lines
  // Match lines with twitter.png or x.com
  const lines = content.split('\n');
  const newLines = lines.filter(line => !line.includes('twitter.png') && !line.includes('x.com'));
  
  fs.writeFileSync(file, newLines.join('\n'));
});
console.log("Done");
