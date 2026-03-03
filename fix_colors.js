const fs = require('fs');
let text = fs.readFileSync('index.html', 'utf8');

text = text.replace(/0,\s*255,\s*136/g, '1, 136, 159');
text = text.replace(/#00ff88/g, '#01889f');
text = text.replace(/00ff88/g, '01889f');

fs.writeFileSync('index.html', text);
console.log('Fixed straggling colors in index.html');
