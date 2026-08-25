# Changelog

All notable changes to this project will be documented in this file.

## [2026-08-25] — Pricing Layout Fixes & Global Email Update

### Author
- Antigravity AI
- Machine: Local Environment

### Changed
- Fixed layout duplication on `pricing.html` where old cards were visible below the new 5-track system.
- Adjusted timeline parameters on `pricing.html`: Shopify to 14-28 days, Custom Website to 4-6 weeks.
- Renamed Track 03 to "SaaS & Platforms" and removed "Most Requested" badge.
- Re-styled "Let's Talk" buttons on dark cards to `bg-white` and black text for better contrast.
- Corrected the header badge spacing on `pricing.html` to align with the layout.
- Modernized the plan comparison table to reflect the new primary tracks: Shopify Store, Custom Website, and SaaS & Platforms.
- Executed a global search-and-replace to update old email formats to `inquiry@aniketbuilds.online` across all HTML files.

## [2026-08-25] — Full-Suite E-Commerce Pivot

### Author
- Antigravity AI
- Machine: Local Environment

### Added
- Created `yamuna-fashion.html` case study highlighting a premium Shopify 2.0 ethnic wear store.
- Re-installed AI Engine MCPs via `setup-ai-engine.ps1` for local intelligence and guardrails.

### Changed
- Repositioned portfolio to **Full-Suite E-commerce Solutions Provider** (Custom Websites, Shopify Headless, WhatsApp AI Agents, n8n Workflows).
- Updated `index.html` hero with glassmorphism, gradients, and refined copy.
- Updated pricing packages to reflect higher-tier custom app development, headless setups, and automation retainers.
- Updated `projects.html` gallery to point directly to Yamuna Fashion, Tipash Luxuries, and Makeup By Tipash.
- Rebuilt production assets via `node scripts/build.js`.

## [2026-07-22] — AI Automation Agency (AAA) Pivot

### Author
- Antigravity AI
- Machine: Local Environment

### Changed
- Repositioned portfolio from "Ecommerce & Web Developer" to "AI Automation Agency & E-Commerce AI Suite".
- Updated `index.html` hero section to focus on WhatsApp AI Agents and Sales/Marketing Funnels.
- Modified the marquee banner to highlight AI-specific capabilities (Agentic SEO, AI Lead Scoring).
- Transformed the "Philosophy" section into an interactive **AI Support ROI Calculator**.
- Replaced previous generic screenshots with conceptually-driven visual references for WhatsApp Agents, Marketing Funnels, and AI Architectures.

## [2026-06-09] — Custom Ecommerce Portfolio Repositioning

### Author
- Antigravity AI
- Machine: Local Environment

### Added
- Created a dedicated "Built For Long-Term Growth" Maintenance Section on `index.html`.
- Added "Website Development (Business Website)" and updated Maintenance Retainers on `pricing.html`.
- Added flexible timeline disclaimer in `about.html`.

### Changed
- Repositioned portfolio entirely from "Shopify Developer" to "Ecommerce & Web Developer" focused on custom web apps and high-performance stores.
- Rewrote `tipash-luxuries.html` case study to reflect Next.js, React, Supabase, Cloudflare architecture.
- Rewrote `makeup-tipash.html` case study to reflect Next.js, React, Supabase, Custom CMS architecture.
- Re-routed all "Let's Talk" CTAs on the homepage to read "Start Your Project" and point to `about.html`.
- Updated Pricing table and formats on `pricing.html` to reflect flexible starting rates and removed fixed prices.
- Replaced outdated FAQs on `pricing.html` with specific Custom Development FAQs.
- Rebuilt site with `node scripts/build.js` to ensure production assets are up to date.

### Fixed
- Fixed color contrast issues across Socials sections.
- Removed floating WhatsApp widget from global components.
## [2026-06-09] — Portfolio Repositioning & Case Study Expansion
### Author
- Antigravity AI
- Machine: Local Environment

### Added
- Created `tipash-luxuries.html` case study page showcasing a premium Shopify build.
- Created `makeup-tipash.html` case study page detailing a beauty ecommerce build.
- Added "Why Work With Me", "Development Process", and "Maintenance Plans" sections to `index.html`.
- Added a full contact form section natively into `index.html`.
- Generated `sitemap.xml` and `robots.txt` for SEO discoverability.
- Added structured data (`application/ld+json`) to `index.html` for `ProfessionalService` and `CollectionPage`.

### Changed
- Shifted positioning from "Shopify Developer" to "Ecommerce & Web Development Specialist" across the site.
- Updated all email links from `aniketshinde.work@outlook.com` to `hello@aniketshinde.work`.
- Overhauled `pricing.html` with a new 5-tier offering structure (Starter, Business, Growth, Monthly Maintenance, Growth Partner) targeting 50k+ INR projects.
- Modified `index.html` CTA buttons to utilize smooth scrolling instead of jumping to a different page.
- Adjusted header navigation logic and layout to support the new smooth-scrolling experience.
- Updated `projects.html` gallery to feature "Tipash Luxuries" and "Makeup By Tipash" at the top.
- Refined the signature marquee text in `about.html` and `pricing.html` to reflect modern, premium web development keywords.

### Removed
- Removed the floating WhatsApp widget to streamline the UI and maintain a cleaner, premium look.
- Phased out references to the old 3-tier pricing model (Basic, Standard, Premium).

### Performance
- Maintained a zero-dependency architecture for core site styling by sticking with Tailwind CSS and vanilla Javascript (`lucide-icons` and `lenis` for smooth scrolling being the only client-side additions).
- Case studies structured to load rapidly without bloated page weights, ensuring high Lighthouse scores remain.
