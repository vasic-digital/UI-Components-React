# AGENTS.md

## Agent Instructions for UI-Components-React

### Purpose
This library provides a standalone set of reusable React UI components styled with Tailwind CSS utility classes. It is designed to be consumed by any React 18+ project that has Tailwind CSS configured.

### When modifying components
1. Always maintain `React.forwardRef` on all components
2. Always set `displayName` on forwardRef components
3. Always accept and spread `className` for consumer customization
4. Always spread remaining HTML attributes (`...props`) onto the root element
5. Export both the component and its TypeScript props interface from `src/index.ts`

### When adding new components
1. Create the component file in `src/components/ComponentName.tsx`
2. Use `React.forwardRef` with proper generic types
3. Accept `className` and spread `...props`
4. Set `displayName`
5. Add the export to `src/index.ts`
6. Add tests in `src/__tests__/ComponentName.test.tsx`

### Testing guidelines
- Use vitest + @testing-library/react
- Test rendering, user interaction, ref forwarding, className merging, and accessibility
- Use `screen.getByRole` and semantic queries over `getByTestId` where possible

### Build
- `tsup` bundles to CJS + ESM with TypeScript declarations
- No Tailwind build step -- classes are string literals consumed by the host project
