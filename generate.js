const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');

const start = html.indexOf('const modalData = {');
const end = html.indexOf('// Modal Functions');
let dataStr = html.substring(start, end)
    .replace('const modalData = ', '')
    .trim();
if (dataStr.endsWith(';')) dataStr = dataStr.slice(0, -1);

let modalData;
try {
    modalData = eval('(' + dataStr + ')');
} catch (e) {
    console.error("Error parsing modalData", e);
    process.exit(1);
}

const template = (data) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.title} | Araas Boloorchi</title>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary: #01889f;
            --secondary: #800000;
            --accent: #00d4ff;
            --wire: rgba(1, 136, 159, 0.15);
            --wire-bright: rgba(1, 136, 159, 0.4);
            --dark: #0a0a0f;
            --darker: #020204;
            --light: #e0e0e0;
            --glow: 0 0 20px rgba(1, 136, 159, 0.5);
            --glow-strong: 0 0 40px rgba(1, 136, 159, 0.8);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Rajdhani', sans-serif;
            background: var(--darker);
            color: var(--light);
            line-height: 1.6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }
        .container {
            max-width: 800px;
            width: 100%;
            background: rgba(10, 10, 15, 0.8);
            border: 1px solid var(--wire-bright);
            padding: 3rem;
            box-shadow: var(--glow);
            text-align: left;
        }
        .back-btn {
            display: inline-block;
            margin-bottom: 2rem;
            color: var(--primary);
            text-decoration: none;
            font-family: 'Space Mono', monospace;
            font-size: 0.9rem;
            border: 1px solid var(--primary);
            padding: 0.5rem 1rem;
            transition: all 0.3s ease;
        }
        .back-btn:hover {
            background: var(--primary);
            color: var(--darker);
            box-shadow: var(--glow);
        }
        h1 {
            font-family: 'Orbitron', sans-serif;
            color: var(--primary);
            font-size: 2.5rem;
            text-shadow: var(--glow);
            margin-bottom: 0.5rem;
        }
        .subtitle {
            color: var(--accent);
            font-family: 'Space Mono', monospace;
            font-size: 1rem;
            margin-bottom: 2rem;
        }
        .media-container {
            margin: 2rem 0;
            text-align: center;
        }
        .media-container img, .media-container video {
            max-width: 100%;
            height: auto;
            border: 1px solid var(--primary);
            box-shadow: var(--glow);
        }
        .content {
            font-size: 1.1rem;
            color: #ccc;
            margin-bottom: 2rem;
        }
        .content h4 {
            color: var(--primary);
            margin-top: 1.5rem;
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
            font-family: 'Orbitron', sans-serif;
        }
        .content ul {
            margin-left: 1.5rem;
            margin-bottom: 1rem;
        }
        .link-container {
            margin-top: 3rem;
            text-align: center;
        }
        .external-btn {
            display: inline-block;
            background: transparent;
            color: var(--primary);
            border: 1px solid var(--primary);
            padding: 1rem 2rem;
            text-decoration: none;
            font-family: 'Space Mono', monospace;
            font-size: 1rem;
            transition: all 0.3s ease;
        }
        .external-btn:hover {
            background: var(--primary);
            color: var(--darker);
            box-shadow: var(--glow-strong);
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="index.html" class="back-btn">[Back to Portfolio]</a>
        <h1>${data.title}</h1>
        <div class="subtitle">${data.subtitle}</div>
        
        ${data.media && data.mediaType ?
        `<div class="media-container">
                ${data.mediaType === 'video' ?
            `<video controls autoplay muted loop playsinline><source src="${data.media}" type="video/mp4"></video>` :
            `<img src="${data.media}" alt="${data.title}">`
        }
            </div>` : ''
    }

        <div class="content">
            ${data.body}
        </div>

        ${data.link ?
        `<div class="link-container">
                <a href="${data.link.url}" target="_blank" class="external-btn">${data.link.text || 'View Details'}</a>
            </div>` : ''
    }
    </div>
</body>
</html>`;

let count = 0;
for (const section in modalData) {
    for (const key in modalData[section]) {
        const item = modalData[section][key];
        const htmlContent = template(item);
        fs.writeFileSync(key + '.html', htmlContent);
        count++;
    }
}
console.log('Successfully generated ' + count + ' HTML pages.');
