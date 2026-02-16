# Upstream: catalog-web

This component library was extracted from the Catalogizer project's web frontend.

## Source
- Repository: Catalogizer
- Path: `catalog-web/src/components/ui/`
- Components: Button, Card, Input, Badge, Select, Switch, Tabs, Progress, Textarea

## Changes from upstream
- Removed dependency on `class-variance-authority` (cva) -- variant logic is now inline with plain objects
- Removed dependency on `lucide-react` -- inline SVG used for Select chevron
- Removed `@/lib/utils` path alias -- uses relative imports with local `cn()` utility
- All components use `React.forwardRef` (Badge, Switch, Progress, Textarea upgraded from FC)
- Added proper TypeScript prop type exports for all components
- Tabs simplified to context-based composition only (removed legacy simple-tabs mode)
- Textarea uses standard `React.TextareaHTMLAttributes` instead of custom props subset
