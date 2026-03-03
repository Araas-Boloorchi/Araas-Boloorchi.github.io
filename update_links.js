const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Remove modal JS script block
html = html.replace(/<script>\s*\/\/ Modal Data[\s\S]*?<\/script>/, '');

fs.writeFileSync('index.html', html);
console.log('Removed all Modal JS logic');
