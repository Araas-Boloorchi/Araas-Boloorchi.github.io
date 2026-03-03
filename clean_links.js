const fs = require('fs');
const path = require('path');

const dir = 'd:\\\\workspace\\\\portfolio';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'index.html');

const allowedDomains = [
    'wikipedia.org',
    'youtube.com',
    'youtu.be',
    'linkedin.com',
    'scholar.google',
    'lumiwalk.ai'
];

function isAllowed(htmlStr) {
    const lower = htmlStr.toLowerCase();
    return allowedDomains.some(domain => lower.includes(domain));
}

files.forEach(file => {
    const fullPath = path.join(dir, file);
    let original = fs.readFileSync(fullPath, 'utf8');
    let content = original;

    // Remove <div class="link-container">...</div> if not allowed
    const divRegex = /<div class="link-container">([\s\S]*?)<\/div>/g;
    content = content.replace(divRegex, (match) => {
        return isAllowed(match) ? match : '';
    });

    // Remove <p><a href="...">...</a></p> if not allowed
    const pRegex = /<p><a\s+href="[^"]*"[^>]*>.*?<\/a><\/p>/g;
    content = content.replace(pRegex, (match) => {
        return isAllowed(match) ? match : '';
    });

    if (file === 'sightvoice.html') {
        if (!content.includes('lumiwalk.ai')) {
            content = content.replace(/<\/div>\s*<\/body>/,
                `    <div class="link-container">\n        <a href="https://lumiwalk.ai" target="_blank" class="external-btn">LumiWalk.ai ↗</a>\n    </div>\n    </div>\n</body>`);
        }
    }

    if (content !== original) {
        fs.writeFileSync(fullPath, content);
        console.log('Cleaned external links in ' + file);
    }
});
console.log('Finished cleaning external links.');
