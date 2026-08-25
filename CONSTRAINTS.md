# Engineering Constraints

1. **YAGNI (You Aren't Gonna Need It)**
   - Implement ONLY what is requested.
   - Do not add features unless specifically asked.

2. **Performance Constraints**
   - No unnecessary JavaScript. Use vanilla CSS and HTML for interactions when possible.
   - Avoid `will-change: transform` on numerous massive images simultaneously (leads to VRAM exhaustion). Use `contain: paint` or `content-visibility` for long lists.
   - All images MUST be WebP/AVIF format, optimally compressed.
   - Heavy gallery images must have `loading="lazy"` and `decoding="async"`.
   - Prefer CSS `object-position` or `transform` for animations instead of altering layout properties like `height`, `margin`, or `top`.

3. **Styling Constraints**
   - Tailwind CSS is the primary styling methodology.
   - Custom CSS is kept to a minimum and isolated to `src/css/main.css` or component `<style>` blocks for specific animations.
   - Ensure pixel-perfect design adherence when reference imagery is provided.
   - Preserve lavish, premium aesthetic: high contrast, smooth animations, and clean typography.

4. **Agentic Rules**
   - Strictly follow the "Ponytail Discipline": be lazy, use native features over dependencies, write minimal code.
   - Update `CHANGELOG.md` upon any significant change to logic, structure, or content.
