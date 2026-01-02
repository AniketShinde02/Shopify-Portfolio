const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../assets/config.json');

const config = {
    WEB3FORMS_ACCESS_KEY: process.env.WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE"
};

// Check if we have a valid key in ENV (typical for Production)
if (!process.env.WEB3FORMS_ACCESS_KEY) {
    console.warn("⚠️  Warning: WEB3FORMS_ACCESS_KEY not found in environment variables. Using default/placeholder.");
} else {
    console.log("✅  WEB3FORMS_ACCESS_KEY found in environment variables.");
}

const content = JSON.stringify(config, null, 4);

fs.writeFileSync(targetPath, content);

console.log(`✅  Generated assets/config.json`);
