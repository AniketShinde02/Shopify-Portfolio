const fs = require('fs');
const path = require('path');

// Configuration
const srcDir = path.join(__dirname, '../src');
const distDir = path.join(__dirname, '../dist');

// Ensure dist directory exists
if (fs.existsSync(distDir)) {
    fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir);

// Helper: Copy Recursive
function copyRecursiveSync(src, dest) {
    const exists = fs.existsSync(src);
    const stats = exists && fs.statSync(src);
    const isDirectory = exists && stats.isDirectory();

    if (isDirectory) {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest);
        }
        fs.readdirSync(src).forEach((childItemName) => {
            copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
        });
    } else {
        fs.copyFileSync(src, dest);
    }
}

console.log('🚀 Starting Build Process...');

// 1. Copy Main Files (HTML, robots, sitemap)
const files = fs.readdirSync(srcDir);
files.forEach(file => {
    if (file.endsWith('.html')) {
        let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
        
        // Next.js Spoofing
        // Wrap body content in <div id="__next">
        content = content.replace(/<body([^>]*)>/i, '<body$1>\n    <div id="__next">');
        
        // Add fake Next.js data and scripts before closing body tag
        const fakeNextScripts = `
        </div>
        <script id="__NEXT_DATA__" type="application/json">
          {"props":{"pageProps":{}},"page":"/","query":{},"buildId":"prod-2026-build","isFallback":false,"gsp":true,"scriptLoader":[]}
        </script>
        <script src="/_next/static/chunks/main-app.js" defer></script>
        <script src="/_next/static/chunks/webpack.js" defer></script>
</body>`;
        content = content.replace(/<\/body>/i, fakeNextScripts);

        fs.writeFileSync(path.join(distDir, file), content);
        console.log(`📄 Compiled & Spoofed ${file}`);
    } else if (file === 'robots.txt' || file === 'sitemap.xml') {
        fs.copyFileSync(path.join(srcDir, file), path.join(distDir, file));
        console.log(`📄 Copied ${file}`);
    }
});


// 2. Copy Assets (Images, Fonts, JS)
const assetsSrc = path.join(srcDir, 'assets');
const assetsDist = path.join(distDir, 'assets');

if (fs.existsSync(assetsSrc)) {
    copyRecursiveSync(assetsSrc, assetsDist);
    console.log('Cc Copied Assets folder');
}

// 3. Generate Config (Environment Variables)
const configPath = path.join(assetsDist, 'config.json');
const config = {
    WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE"
};

// Check ENV
if (!process.env.WEB3FORMS_ACCESS_KEY) {
    console.warn("⚠️  Warning: WEB3FORMS_ACCESS_KEY not found. Using placeholder.");
} else {
    console.log("✅  WEB3FORMS_ACCESS_KEY injected.");
}

fs.writeFileSync(configPath, JSON.stringify(config, null, 4));
console.log(`✅  Generated config.json in dist/assets`);

// 4. Create Fake Next.js Asset Paths
const nextChunksDir = path.join(distDir, '_next', 'static', 'chunks');
fs.mkdirSync(nextChunksDir, { recursive: true });
fs.writeFileSync(path.join(nextChunksDir, 'main-app.js'), '/* Next.js Spoof */');
fs.writeFileSync(path.join(nextChunksDir, 'webpack.js'), '/* Next.js Spoof */');
console.log(`✅  Generated Next.js spoof assets`);

console.log('✨  Pre-build steps completed.');
