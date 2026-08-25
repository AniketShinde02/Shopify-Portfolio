# System Architecture

## Overview
This project is a high-end web development and ecommerce portfolio for Aniket Shinde. It is built using a lightweight, highly optimized architecture focusing on performance, GPU-accelerated animations, and responsive design.

## Tech Stack
*   **Core:** Vanilla HTML5, CSS3, JavaScript
*   **Styling:** Tailwind CSS (via PostCSS/Autoprefixer)
*   **Build System:** Custom Node.js build script (`scripts/build.js`) + Tailwind CLI
*   **Package Manager:** pnpm
*   **Agentic Tooling:** Agentation, Boneyard.js

## Directory Structure
*   `src/`: Contains all raw HTML, assets, and input CSS.
*   `dist/`: The compiled, production-ready output folder.
*   `scripts/`: Contains the Node.js build scripts.

## Performance Architecture
*   **Images:** WebP format, natively lazy-loaded (`loading="lazy"`) and asynchronously decoded (`decoding="async"`).
*   **Rendering:** Heavy UI elements (like the project gallery) use `content-visibility` or `contain: paint` properties to defer off-screen rendering.
*   **Animations:** Uses GPU-accelerated CSS properties (`transform`, `opacity`, `object-position`) to prevent layout thrashing and main-thread blocking.
