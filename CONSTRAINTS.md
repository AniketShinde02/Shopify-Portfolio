# CONSTRAINTS.md â€” Explicit Boundaries & Off-Limits Code

## Strict Rules
1. **YAGNI**: Implement ONLY explicitly requested features.
2. **Reuse Existing Code First**: Inspect utilities before adding duplicate helpers.
3. **Prefer Native Platform Features**: Use native Web APIs over heavy NPM packages.
4. **Token Budget**: Keep skills inside `.agents/skills/` locally.
5. **Package Manager Standardization**:
   - Next.js / React / Node / AI / Monorepos â†’ `pnpm` (default)
   - Existing lockfile priority: `pnpm-lock.yaml` (pnpm), `yarn.lock` (yarn), `bun.lockb/bun.lock` (bun), `package-lock.json` (npm).
   - ZERO mixed package managers inside one project.
