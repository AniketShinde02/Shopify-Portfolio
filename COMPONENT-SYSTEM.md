# Portfolio Component System - Quick Start

## ✅ What's Done

I've created a professional component-based system for your portfolio:

### Files Created:
1. **`src/components/header.html`** - Reusable navigation header
2. **`src/components/footer.html`** - Reusable footer with contact info
3. **`src/assets/js/components.js`** - Component loader script
4. **`docs/COMPONENTS.md`** - Full documentation
5. **`src/example-component-page.html`** - Working example

## 🚀 How to Use (Super Simple!)

### For Any New Page:

```html
<!DOCTYPE html>
<html>
<head>
    <script src="assets/js/components.js"></script>
</head>
<body>
    <!-- Header loads here automatically -->
    <div data-component="header"></div>

    <!-- Your content -->
    <main>
        <!-- ... -->
    </main>

    <!-- Footer loads here automatically -->
    <div data-component="footer"></div>

    <script src="https://unpkg.com/lucide@latest"></script>
    <script>lucide.createIcons();</script>
</body>
</html>
```

That's it! Header and footer will load automatically.

## 📝 To Update Header/Footer Globally:

1. Edit `src/components/header.html` OR `src/components/footer.html`
2. Save
3. Refresh ANY page - changes appear everywhere!

## 🎯 Benefits:

- ✅ **150+ lines removed per page**
- ✅ **Update once, changes everywhere**
- ✅ **No more copy-paste header/footer**
- ✅ **Consistent design across all pages**
- ✅ **Easy maintenance**

## 📖 Full Documentation:

See `docs/COMPONENTS.md` for complete guide.

## 🧪 Test It:

Open `src/example-component-page.html` in a local server to see it working.

---

**Note**: Use a local server (Live Server extension) for testing. Components won't load with `file://` protocol.
