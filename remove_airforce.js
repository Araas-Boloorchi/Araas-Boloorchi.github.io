const fs = require('fs');
const path = require('path');

const dir = 'd:\\\\workspace\\\\portfolio';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let content = fs.readFileSync(fullPath, 'utf8');
    let original = content;

    // vio.html replacements
    content = content.replace('by the US Air Force through', 'through');
    content = content.replace('under US Air Force Institute of Technology', 'under the Institute of Technology');

    // index.html replacements
    content = content.replace('us air force ', '');
    content = content.replace('ATRC (US Air Force)', 'ATRC');

    // drone.html replacements
    content = content.replace(' • US Air Force Funded', '');
    content = content.replace('Developed under US Air Force funding.', 'Developed under ATRC funding.');
    content = content.replace('<span class="modal-tag">Air Force</span>\n', '');

    // atrc.html replacements
    content = content.replace('under US Air Force funding', 'under ATRC funding');
    content = content.replace('<span class="modal-tag">US Air Force</span>\n', '');
    content = content.replace('US Air Force Research ↗', 'ATRC Research ↗');

    // General fallback regex
    content = content.replace(/US Air Force/gi, 'ATRC');
    content = content.replace(/Air Force/gi, 'Defense');
    content = content.replace(/airforce/gi, 'defense');

    if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Updated ' + file);
    }
});
console.log('Finished removing Air Force references.');
