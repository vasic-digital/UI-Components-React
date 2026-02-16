# @vasic-digital/ui-components

Reusable React UI component library with Tailwind CSS.

## Components

| Component | Description |
|-----------|-------------|
| `Button` | Button with variants (primary, secondary, outline, ghost, destructive), sizes (sm, md, lg), loading state |
| `Card` | Composable card with CardHeader, CardTitle, CardDescription, CardContent, CardFooter |
| `Input` | Text input with label, error message, icon support |
| `Badge` | Inline badge with variants (default, secondary, destructive, outline) |
| `Select` | Dropdown select with options array or children, label, error |
| `Switch` | Toggle switch with checked/onCheckedChange |
| `Tabs` | Tab navigation with Tabs, TabsList, TabsTrigger, TabsContent |
| `Progress` | Progress bar with value, max, optional label |
| `Textarea` | Multi-line text input with label, error message |

## Installation

```bash
npm install @vasic-digital/ui-components
```

## Prerequisites

Your project must have:
- React 18+
- Tailwind CSS configured

## Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from '@vasic-digital/ui-components'

function App() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="primary" size="md">
          Click me
        </Button>
      </CardContent>
    </Card>
  )
}
```

## Development

```bash
npm install          # install dependencies
npm run build        # build library (CJS + ESM + types)
npm run test         # run tests
npm run lint         # typecheck
```

## License

MIT
