const fs = require('fs');

const file = 'src/app/Components/Home/Footer.tsx';
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

// Remove single-line Twitter blocks
content = content.replace(/.*<Link href="https:\/\/x\.com\/[^"]+".*twitter\.png.*<\/Link>\n?/g, '');
content = content.replace(/.*<a href="https:\/\/x\.com\/[^"]+".*twitter\.png.*<\/a>\n?/g, '');

// Remove multi-line Twitter block
content = content.replace(/[ \t]*<Link href="https:\/\/x\.com"[^>]*>\n[ \t]*<span[^>]*><img src="\/twitter\.png"[^>]*><\/img><\/span>\n[ \t]*<\/Link>\n?/g, '');

fs.writeFileSync(file, content);
console.log("Fixed Home/Footer.tsx");
