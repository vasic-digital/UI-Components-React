# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Standalone React UI component library built with TypeScript and Tailwind CSS utility classes. Provides reusable, composable, accessible components with forwardRef support, variant/size props, and dark mode compatibility.

## Commands

```bash
npm install                  # install dependencies
npm run build                # build with tsup (CJS + ESM + .d.ts)
npm run test                 # run vitest tests
npm run lint                 # typecheck with tsc --noEmit
```

## Architecture

- `src/components/` -- all UI components (Button, Card, Input, Badge, Select, Switch, Tabs, Progress, Textarea)
- `src/lib/utils.ts` -- `cn()` utility for merging CSS class names
- `src/index.ts` -- barrel re-export of all components and types
- `src/__tests__/` -- vitest + @testing-library/react test suites

## Conventions

- **forwardRef**: all components use `React.forwardRef` and accept a `ref` prop
- **className**: every component accepts `className` for Tailwind CSS customization
- **displayName**: set on all forwardRef components
- **TypeScript**: strict mode, exported interfaces/types for all component props
- **Composition**: Card uses sub-components (CardHeader, CardTitle, CardDescription, CardContent, CardFooter)
- **Variants**: Button and Badge use variant/size string unions instead of class-variance-authority (zero dependencies)
- **Testing**: vitest with jsdom, @testing-library/react, @testing-library/jest-dom
- **No runtime dependencies**: only React as a peer dependency; all Tailwind classes are utility strings

## Constraints

- Do NOT add runtime dependencies beyond React peer dependency
- Components must remain framework-agnostic (no Next.js, Remix, etc. specifics)
- All CSS is via Tailwind utility classes -- consumers must have Tailwind CSS configured
