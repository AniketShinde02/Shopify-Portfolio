# Component System Documentation

## Overview
This portfolio uses a component-based system for header and footer to maintain consistency across all pages and simplify maintenance.

## File Structure
```
src/
├── components/
│   ├── header.html    # Navigation header component
│   └── footer.html    # Footer with contact info
├── assets/
│   └── js/
│       └── components.js  # Component loader script
└── [your-page].html   # Any page using components
```

## How to Use Components

### 1. In Your HTML Pages

Replace your existing header and footer code with simple placeholder divs:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Your head content -->
    <script src="assets/js/components.js"></script>
</head>
<body>
    <!-- Header Component -->
    <div data-component="header"></div>

    <!-- Your page content here -->
    <main>
        <!-- ... -->
    </main>

    <!-- Footer Component -->
    <div data-component="footer"></div>

    <!-- Scripts -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <script src="assets/js/main.js"></script>
    <script>
        lucide.createIcons();
    </script>
</body>
</html>
```

### 2. Component Files

#### Header (`components/header.html`)
- Contains navigation bar
- Mobile menu
- Auto-highlights active page link
- Responsive design

#### Footer (`components/footer.html`)
- Contact information
- Navigation links
- WhatsApp floating widget
- Social links

### 3. How It Works

1. **Component Loader** (`assets/js/components.js`):
   - Automatically detects elements with `data-component` attribute
   - Fetches the corresponding HTML file from `components/` folder
   - Injects the HTML into the placeholder element
   - Re-initializes Lucide icons

2. **Active Link Highlighting**:
   - Header component automatically highlights the current page link
   - Uses `data-nav` attributes to identify links
   - Compares with current page URL

## Benefits

✅ **Single Source of Truth**: Update header/footer once, changes reflect everywhere
✅ **Easy Maintenance**: No need to edit multiple files for simple changes
✅ **Consistency**: Same header/footer across all pages
✅ **Clean Code**: Pages are cleaner without repetitive header/footer code
✅ **Fast Updates**: Change contact info, links, or styling in one place

## Making Changes

### To Update Header:
1. Edit `src/components/header.html`
2. Save the file
3. Refresh any page - changes appear automatically

### To Update Footer:
1. Edit `src/components/footer.html`
2. Save the file
3. Refresh any page - changes appear automatically

### To Add New Page:
1. Create your HTML file
2. Add `<script src="assets/js/components.js"></script>` in `<head>`
3. Add `<div data-component="header"></div>` where you want the header
4. Add `<div data-component="footer"></div>` where you want the footer
5. Done! Header and footer will load automatically

## Important Notes

⚠️ **Script Order**: Make sure `components.js` is loaded in the `<head>` section
⚠️ **Lucide Icons**: Call `lucide.createIcons()` after all scripts load
⚠️ **File Paths**: Component paths are relative to the HTML file location
⚠️ **Local Testing**: Use a local server (like Live Server) for testing - components won't load with `file://` protocol

## Troubleshooting

**Components not loading?**
- Check browser console for errors
- Ensure you're using a local server (not opening HTML directly)
- Verify file paths are correct
- Check that `components.js` is loaded before components

**Icons not showing?**
- Ensure Lucide script is loaded
- Call `lucide.createIcons()` after page load
- Component loader automatically re-initializes icons

**Active link not highlighting?**
- Check that links have `data-nav` attributes
- Verify page filename matches the link's href

## Example: Converting Existing Page

**Before:**
```html
<body>
    <nav id="navbar">
        <!-- 50+ lines of navigation code -->
    </nav>
    
    <!-- Page content -->
    
    <footer>
        <!-- 100+ lines of footer code -->
    </footer>
</body>
```

**After:**
```html
<body>
    <div data-component="header"></div>
    
    <!-- Page content -->
    
    <div data-component="footer"></div>
</body>
```

**Result**: Same functionality, 150+ lines removed per page!

---

**Version**: 1.0.0
**Last Updated**: 2026-01-10
**Author**: Aniket Shinde
