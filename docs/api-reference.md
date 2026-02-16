# UI-Components-React API Reference

## Table of Contents

- [Button](#button)
- [Card](#card)
- [Input](#input)
- [Badge](#badge)
- [Select](#select)
- [Switch](#switch)
- [Tabs](#tabs)
- [Progress](#progress)
- [Textarea](#textarea)
- [Utilities](#utilities)

---

## Button

```tsx
import { Button } from 'ui-components-react';
import type { ButtonProps, ButtonVariant, ButtonSize } from 'ui-components-react';
```

A button component with variant-based styling, size options, and a loading state. Renders a `<button>` element. Forwards ref to `HTMLButtonElement`.

### ButtonProps

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `ButtonVariant` | `'primary'` | Visual style variant |
| `size` | `ButtonSize` | `'md'` | Size preset |
| `loading` | `boolean` | `undefined` | When `true`, shows a spinner and disables the button |
| `className` | `string` | `undefined` | Additional CSS classes |
| `disabled` | `boolean` | `undefined` | Disables the button (also set when `loading` is `true`) |
| `children` | `ReactNode` | -- | Button content |

All standard `<button>` HTML attributes (`onClick`, `type`, `aria-*`, etc.) are also accepted.

### ButtonVariant

```typescript
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
```

| Variant | Light Mode Classes | Dark Mode Classes |
|---|---|---|
| `primary` | `bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl` | (same) |
| `secondary` | `bg-gray-100 text-gray-900 hover:bg-gray-200` | `dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600` |
| `outline` | `border border-gray-300 bg-white text-gray-900 hover:bg-gray-50` | `dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700` |
| `ghost` | `hover:bg-gray-100 hover:text-gray-900` | `dark:hover:bg-gray-700 dark:hover:text-white` |
| `destructive` | `bg-red-600 text-white hover:bg-red-700 shadow-lg hover:shadow-xl` | (same) |

### ButtonSize

```typescript
type ButtonSize = 'sm' | 'md' | 'lg'
```

| Size | Classes |
|---|---|
| `sm` | `h-9 rounded-md px-3 text-sm` |
| `md` | `h-10 px-4 py-2 text-sm` |
| `lg` | `h-11 rounded-md px-8 text-base` |

### Base Classes

Applied to all buttons regardless of variant or size:

```
inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
disabled:pointer-events-none disabled:opacity-50
```

### Loading State

When `loading` is `true`:
- The button is disabled (`disabled || loading`)
- An animated SVG spinner is prepended to the children

---

## Card

```tsx
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from 'ui-components-react';
```

A composable card container consisting of six sub-components. Each sub-component uses `React.forwardRef` and accepts a `className` prop.

### Card (root)

Renders a `<div>`. Forwards ref to `HTMLDivElement`.

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | -- | Card content (typically sub-components) |

**Default classes:** `rounded-xl border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800`

### CardHeader

Renders a `<div>`. Forwards ref to `HTMLDivElement`.

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Additional CSS classes |

**Default classes:** `flex flex-col space-y-1.5 p-6`

### CardTitle

Renders an `<h3>`. Forwards ref to `HTMLHeadingElement`.

Extends `React.HTMLAttributes<HTMLHeadingElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Additional CSS classes |

**Default classes:** `font-semibold leading-none tracking-tight text-gray-900 dark:text-white`

### CardDescription

Renders a `<p>`. Forwards ref to `HTMLParagraphElement`.

Extends `React.HTMLAttributes<HTMLParagraphElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Additional CSS classes |

**Default classes:** `text-sm text-gray-600 dark:text-gray-400`

### CardContent

Renders a `<div>`. Forwards ref to `HTMLDivElement`.

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Additional CSS classes |

**Default classes:** `p-6 pt-0`

### CardFooter

Renders a `<div>`. Forwards ref to `HTMLDivElement`.

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Additional CSS classes |

**Default classes:** `flex items-center p-6 pt-0`

---

## Input

```tsx
import { Input } from 'ui-components-react';
import type { InputProps } from 'ui-components-react';
```

A text input component with optional label, error message, and leading icon. Renders a wrapper `<div>` containing optional `<label>`, the `<input>` element (with optional icon), and optional error `<p>`. Forwards ref to `HTMLInputElement`.

### InputProps

Extends `React.InputHTMLAttributes<HTMLInputElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `undefined` | Label text displayed above the input |
| `error` | `string` | `undefined` | Error message displayed below the input; also applies red border styling |
| `icon` | `ReactNode` | `undefined` | Icon element rendered inside the input on the left side |
| `className` | `string` | `undefined` | Additional CSS classes applied to the `<input>` element |
| `type` | `string` | `undefined` | HTML input type (`text`, `email`, `password`, etc.) |

All standard `<input>` HTML attributes (`value`, `onChange`, `placeholder`, `disabled`, `name`, etc.) are also accepted.

### Behavior

- When `icon` is provided, the input receives `pl-10` padding to make room for the icon.
- When `error` is provided, the input border changes to red (`border-red-500 focus-visible:ring-red-500`).
- The label renders as a `<label>` element with `text-sm font-medium text-gray-700 dark:text-gray-300`.
- The error renders as a `<p>` element with `text-sm text-red-600 dark:text-red-400`.

---

## Badge

```tsx
import { Badge } from 'ui-components-react';
import type { BadgeProps, BadgeVariant } from 'ui-components-react';
```

An inline badge/label component with variant-based coloring. Renders a `<span>` element. Forwards ref to `HTMLSpanElement`.

### BadgeProps

Extends `React.HTMLAttributes<HTMLSpanElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `BadgeVariant` | `'default'` | Visual style variant |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | -- | Badge content |

### BadgeVariant

```typescript
type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'
```

| Variant | Light Mode Classes | Dark Mode Classes |
|---|---|---|
| `default` | `bg-blue-100 text-blue-800` | `dark:bg-blue-900 dark:text-blue-300` |
| `secondary` | `bg-gray-100 text-gray-800` | `dark:bg-gray-700 dark:text-gray-300` |
| `destructive` | `bg-red-100 text-red-800` | `dark:bg-red-900 dark:text-red-300` |
| `outline` | `border border-gray-300 text-gray-800 bg-transparent` | `dark:border-gray-600 dark:text-gray-300` |

### Base Classes

Applied to all badges regardless of variant:

```
inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
```

---

## Select

```tsx
import { Select } from 'ui-components-react';
import type { SelectProps, SelectOption } from 'ui-components-react';
```

A dropdown select component that accepts options as a prop array or as `<option>` children. Renders a wrapper `<div>` containing optional label, the `<select>` element with a custom dropdown arrow, and optional error message. Forwards ref to `HTMLSelectElement`.

### SelectProps

Extends `Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `options` | `SelectOption[]` | `undefined` | Array of options to render. When provided, `children` are ignored. |
| `onChange` | `(value: string) => void` | `undefined` | Callback with the selected value string |
| `onValueChange` | `(value: string) => void` | `undefined` | Alias for `onChange` (both are called if both are provided) |
| `label` | `string` | `undefined` | Label text displayed above the select |
| `error` | `string` | `undefined` | Error message displayed below the select; applies red border |
| `className` | `string` | `undefined` | Additional CSS classes applied to the `<select>` element |
| `children` | `ReactNode` | -- | `<option>` elements (used only when `options` is not provided) |

**Note:** The native `onChange` from `React.SelectHTMLAttributes` is omitted and replaced with a simplified signature that receives the value string directly instead of a `ChangeEvent`.

### SelectOption

```typescript
interface SelectOption {
  value: string;
  label: string;
}
```

| Property | Type | Description |
|---|---|---|
| `value` | `string` | The option value submitted on selection |
| `label` | `string` | The display text shown in the dropdown |

### Behavior

- The component renders a custom SVG chevron icon as a dropdown indicator.
- The native `<select>` has `appearance-none` applied for consistent cross-browser styling.
- When `error` is provided, the select border changes to red.
- When `options` array is provided, it takes precedence over `children`.

---

## Switch

```tsx
import { Switch } from 'ui-components-react';
import type { SwitchProps } from 'ui-components-react';
```

A toggle switch component with accessible `role="switch"` semantics. Renders a `<button>` element with an animated toggle knob. Forwards ref to `HTMLButtonElement`.

### SwitchProps

Extends `Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `checked` | `boolean` | `false` | Whether the switch is on |
| `onCheckedChange` | `(checked: boolean) => void` | `undefined` | Callback invoked with the new checked state on toggle |
| `disabled` | `boolean` | `undefined` | Disables the switch |
| `className` | `string` | `undefined` | Additional CSS classes |

### Accessibility

- `role="switch"` is set on the button element.
- `aria-checked` reflects the current `checked` state.
- The component is keyboard-accessible (inherits `<button>` keyboard handling).
- When `disabled`, the switch has `opacity-50 cursor-not-allowed`.

### Visual States

| State | Track Color (Light) | Track Color (Dark) |
|---|---|---|
| Unchecked | `bg-gray-200` | `dark:bg-gray-700` |
| Checked | `bg-blue-600` | `dark:bg-blue-500` |

The toggle knob is a white circle (`bg-white`) that translates horizontally (`translate-x-1` to `translate-x-6`) with a CSS transition.

---

## Tabs

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'ui-components-react';
import type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps } from 'ui-components-react';
```

A tabbed content component system using React Context for state management. Supports both controlled and uncontrolled modes.

### Tabs (root)

Renders a `<div>` and provides `TabsContext` to child components. Forwards ref to `HTMLDivElement`.

#### TabsProps

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `defaultValue` | `string` | `''` | Initial active tab value (uncontrolled mode) |
| `value` | `string` | `undefined` | Active tab value (controlled mode) |
| `onValueChange` | `(value: string) => void` | `undefined` | Callback when the active tab changes |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | -- | Must contain TabsList and TabsContent children |

**Controlled vs. Uncontrolled:**
- When `value` is provided, the component is controlled: the consumer manages state externally.
- When `value` is not provided, the component uses internal state initialized with `defaultValue`.
- In both modes, `onValueChange` is called when a tab is selected.

---

### TabsList

Renders a `<div>` with `role="tablist"`. Forwards ref to `HTMLDivElement`.

#### TabsListProps

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | -- | TabsTrigger children |

**Default classes:** `inline-flex h-10 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-800 p-1 text-gray-600 dark:text-gray-400`

---

### TabsTrigger

Renders a `<button>` with `role="tab"`. Forwards ref to `HTMLButtonElement`.

#### TabsTriggerProps

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | (required) | The tab value this trigger activates |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | -- | Tab label content |

**Data attributes:**
- `data-state="active"` when this trigger's value matches the active tab
- `data-state="inactive"` otherwise

**ARIA attributes:**
- `aria-selected` is set to `true` when active

**Active state classes:** `bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm`

**Inactive state classes:** `hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white`

---

### TabsContent

Renders a `<div>` with `role="tabpanel"`, or returns `null` when inactive. Forwards ref to `HTMLDivElement`.

#### TabsContentProps

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `string` | (required) | The tab value this content panel corresponds to |
| `className` | `string` | `undefined` | Additional CSS classes |
| `children` | `ReactNode` | -- | Panel content |

**Behavior:** When the tab is inactive (`context.value !== value`), the component returns `null` and renders nothing.

**Default classes:** `mt-2`

**Data attributes:** `data-state="active"` when rendered

---

## Progress

```tsx
import { Progress } from 'ui-components-react';
import type { ProgressProps } from 'ui-components-react';
```

A progress bar component with optional percentage label. Renders a container `<div>` with an inner track and fill bar. Forwards ref to `HTMLDivElement`.

### ProgressProps

Extends `React.HTMLAttributes<HTMLDivElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `value` | `number` | (required) | Current progress value |
| `max` | `number` | `100` | Maximum progress value |
| `showLabel` | `boolean` | `false` | Whether to display a percentage label above the bar |
| `className` | `string` | `undefined` | Additional CSS classes applied to the outer container |

### Behavior

- The percentage is calculated as `Math.min(100, Math.max(0, (value / max) * 100))`, clamped between 0% and 100%.
- The fill bar width is set via inline `style={{ width: percentage + '%' }}`.
- A CSS transition (`transition-all duration-300 ease-out`) animates width changes.
- When `showLabel` is `true`, a header row displays "Progress" on the left and the rounded percentage on the right.

### Accessibility

- The track `<div>` has `role="progressbar"`.
- `aria-valuenow` is set to `value`.
- `aria-valuemin` is set to `0`.
- `aria-valuemax` is set to `max`.

### Styling

| Part | Classes |
|---|---|
| Track | `w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2` |
| Fill | `bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out` |
| Label container | `flex justify-between text-sm mb-1` |

---

## Textarea

```tsx
import { Textarea } from 'ui-components-react';
import type { TextareaProps } from 'ui-components-react';
```

A multi-line text input component with optional label and error message. Renders a wrapper `<div>` containing optional `<label>`, the `<textarea>` element, and optional error `<p>`. Forwards ref to `HTMLTextAreaElement`.

### TextareaProps

Extends `React.TextareaHTMLAttributes<HTMLTextAreaElement>`.

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | `undefined` | Label text displayed above the textarea |
| `error` | `string` | `undefined` | Error message displayed below the textarea; applies red border |
| `className` | `string` | `undefined` | Additional CSS classes applied to the `<textarea>` element |
| `disabled` | `boolean` | `undefined` | Disables the textarea |

All standard `<textarea>` HTML attributes (`value`, `onChange`, `placeholder`, `rows`, `cols`, `maxLength`, `name`, etc.) are also accepted.

### Behavior

- When `error` is provided, the textarea border changes to red (`border-red-500 focus:ring-red-500`).
- The label renders as a `<label>` element with `block text-sm font-medium text-gray-700 dark:text-gray-300`.
- The error renders as a `<p>` element with `text-sm text-red-600 dark:text-red-400`.
- The wrapper `<div>` uses `space-y-2` for consistent vertical spacing between label, textarea, and error.

---

## Utilities

### cn()

```tsx
import { cn } from 'ui-components-react';
```

```typescript
function cn(...classes: (string | number | boolean | undefined | null)[]): string
```

Utility function for merging CSS class names. Filters out all falsy values (`undefined`, `null`, `false`, `0`) and empty strings, then joins the remaining strings with a space.

**Parameters:**

| Parameter | Type | Description |
|---|---|---|
| `...classes` | `(string \| number \| boolean \| undefined \| null)[]` | Class name values to merge |

**Returns:** `string` -- A single space-separated class string.

**Examples:**

```typescript
cn('px-4', 'py-2')
// => 'px-4 py-2'

cn('base', false && 'conditional', undefined, 'always')
// => 'base always'

cn('a', '', null, 'b')
// => 'a b'
```

**Note:** This utility filters by type (`typeof c === 'string' && c.length > 0`). Numbers are filtered out. Only non-empty strings are included in the output.
