# Architecture -- UI-Components-React

## Purpose

Reusable React UI component library built with TypeScript and Tailwind CSS utility classes. Provides composable, accessible components with forwardRef support, variant/size props, and dark mode compatibility. Zero runtime dependencies beyond React peer dependency.

## Structure

```
src/
  components/      All UI components: Button, Card, Input, Badge, Select, Switch, Tabs, Progress, Textarea
  lib/utils.ts     cn() utility for merging CSS class names
  index.ts         Barrel re-export of all components and types
  __tests__/       Vitest + @testing-library/react test suites
```

## Key Components

- **`Button`** -- Variants (primary, secondary, outline, ghost, destructive), sizes (sm, md, lg), loading state, forwardRef
- **`Card`** -- Composable with CardHeader, CardTitle, CardDescription, CardContent, CardFooter sub-components
- **`Input`** -- Text input with label, error message, icon support, forwardRef
- **`Badge`** -- Inline badge with variants (default, secondary, destructive, outline)
- **`Select`** -- Dropdown select with options array or children, label, error
- **`Switch`** -- Toggle switch with checked/onCheckedChange
- **`Tabs`** -- Tab navigation with Tabs, TabsList, TabsTrigger, TabsContent
- **`Progress`** -- Progress bar with value, max, optional label
- **`Textarea`** -- Multi-line text input with label, error message

## Data Flow

```
Consumer: <Button variant="primary" size="md" loading={true}>Click</Button>
    |
    Button component: forwardRef -> merge className with cn() -> render with Tailwind classes
    |
    Card composition: <Card><CardHeader><CardTitle>...</CardTitle></CardHeader><CardContent>...</CardContent></Card>
```

## Dependencies

- React 18+ as peer dependency (only runtime dependency)
- Tailwind CSS (consumers must have it configured)
- `vitest` + `@testing-library/react` for testing

## Testing Strategy

Vitest with jsdom and @testing-library/react. Tests cover rendering, variant/size prop application, event handling, forwardRef forwarding, accessible roles, and className merging.
