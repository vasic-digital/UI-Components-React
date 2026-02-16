# UI-Components-React User Guide

## Installation

```bash
npm install ui-components-react
```

### Prerequisites

- React 18+
- Tailwind CSS configured in your project

Ensure your `tailwind.config.js` includes the library's component files in the `content` array so Tailwind can detect the utility classes:

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/ui-components-react/dist/**/*.{js,mjs}',
  ],
  // ...
};
```

## Components

### Button

A versatile button component with five visual variants, three sizes, and a loading state.

```tsx
import { Button } from 'ui-components-react';

// Basic usage
<Button>Click Me</Button>

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Loading state (disables the button and shows a spinner)
<Button loading>Saving...</Button>

// Disabled state
<Button disabled>Unavailable</Button>

// With onClick handler
<Button onClick={() => console.log('clicked')}>Submit</Button>

// Custom className override
<Button className="w-full">Full Width</Button>
```

#### Variants Visual Guide

| Variant | Light Mode | Dark Mode |
|---|---|---|
| `primary` | Blue background, white text | Same |
| `secondary` | Gray background, dark text | Dark gray background, white text |
| `outline` | White background, gray border | Dark background, gray border |
| `ghost` | Transparent, hover gray background | Transparent, hover dark gray |
| `destructive` | Red background, white text | Same |

---

### Card

A composable card container built from sub-components. Mix and match the parts you need.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from 'ui-components-react';

// Full card with all sub-components
<Card>
  <CardHeader>
    <CardTitle>Movie Collection</CardTitle>
    <CardDescription>Your cataloged media files</CardDescription>
  </CardHeader>
  <CardContent>
    <p>You have 247 movies in your library.</p>
  </CardContent>
  <CardFooter>
    <Button>View All</Button>
  </CardFooter>
</Card>

// Minimal card (just content)
<Card>
  <CardContent>
    <p>Simple content card</p>
  </CardContent>
</Card>

// Card with custom styling
<Card className="max-w-md mx-auto">
  <CardHeader>
    <CardTitle>Styled Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Custom width and centering applied.</p>
  </CardContent>
</Card>
```

#### Sub-Components

| Component | HTML Element | Purpose |
|---|---|---|
| `Card` | `<div>` | Outer container with border, shadow, and rounded corners |
| `CardHeader` | `<div>` | Header section with vertical spacing |
| `CardTitle` | `<h3>` | Title heading |
| `CardDescription` | `<p>` | Subtitle/description text |
| `CardContent` | `<div>` | Main content area |
| `CardFooter` | `<div>` | Footer with horizontal flex layout |

---

### Input

A text input with optional label, error message, and leading icon.

```tsx
import { Input } from 'ui-components-react';

// Basic input
<Input placeholder="Enter your name" />

// With label
<Input label="Email" type="email" placeholder="you@example.com" />

// With error message
<Input
  label="Password"
  type="password"
  error="Password must be at least 8 characters"
/>

// With leading icon
<Input
  label="Search"
  icon={<SearchIcon className="h-4 w-4" />}
  placeholder="Search media..."
/>

// Disabled state
<Input label="Read Only" value="Fixed value" disabled />

// Controlled input
function SearchField() {
  const [query, setQuery] = useState('');
  return (
    <Input
      label="Search"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Type to search..."
    />
  );
}
```

---

### Badge

An inline status/label badge with four visual variants.

```tsx
import { Badge } from 'ui-components-react';

// Default (blue)
<Badge>New</Badge>

// Variants
<Badge variant="default">Active</Badge>
<Badge variant="secondary">Draft</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Pending</Badge>

// With custom styling
<Badge variant="default" className="text-base px-4 py-1">
  Large Badge
</Badge>
```

#### Variants

| Variant | Light Appearance | Dark Appearance |
|---|---|---|
| `default` | Blue background, blue text | Dark blue background, light blue text |
| `secondary` | Gray background, gray text | Dark gray background, light gray text |
| `destructive` | Red background, red text | Dark red background, light red text |
| `outline` | Transparent, gray border | Transparent, gray border |

---

### Select

A dropdown select component that accepts options as an array or as `<option>` children.

```tsx
import { Select } from 'ui-components-react';

// Using the options prop
<Select
  label="Category"
  options={[
    { value: 'movie', label: 'Movies' },
    { value: 'tv', label: 'TV Shows' },
    { value: 'music', label: 'Music' },
  ]}
  onChange={(value) => console.log('Selected:', value)}
/>

// Using children
<Select label="Sort By" onValueChange={(value) => setSort(value)}>
  <option value="name">Name</option>
  <option value="date">Date Added</option>
  <option value="size">File Size</option>
</Select>

// With error
<Select
  label="Protocol"
  options={[
    { value: '', label: 'Select a protocol...' },
    { value: 'smb', label: 'SMB' },
    { value: 'ftp', label: 'FTP' },
  ]}
  error="Please select a protocol"
/>

// Disabled
<Select
  label="Locked"
  options={[{ value: 'a', label: 'Option A' }]}
  disabled
/>
```

**Note:** `Select` provides both `onChange` and `onValueChange` callbacks. Both receive the selected `value` string directly (not a synthetic event). Use whichever naming convention fits your codebase.

---

### Switch

A toggle switch component with accessible `role="switch"` semantics.

```tsx
import { Switch } from 'ui-components-react';

// Basic toggle
function SettingsPanel() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Switch checked={enabled} onCheckedChange={setEnabled} />
      <span>Enable notifications</span>
    </div>
  );
}

// Disabled switch
<Switch checked={true} disabled />

// Multiple settings
function NotificationSettings() {
  const [email, setEmail] = useState(true);
  const [push, setPush] = useState(false);
  const [sms, setSms] = useState(false);

  return (
    <div className="space-y-4">
      <label className="flex items-center gap-3">
        <Switch checked={email} onCheckedChange={setEmail} />
        Email notifications
      </label>
      <label className="flex items-center gap-3">
        <Switch checked={push} onCheckedChange={setPush} />
        Push notifications
      </label>
      <label className="flex items-center gap-3">
        <Switch checked={sms} onCheckedChange={setSms} />
        SMS notifications
      </label>
    </div>
  );
}
```

---

### Tabs

A tabbed content component with context-based state management. Supports both controlled and uncontrolled modes.

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from 'ui-components-react';

// Uncontrolled (manages its own state)
<Tabs defaultValue="movies">
  <TabsList>
    <TabsTrigger value="movies">Movies</TabsTrigger>
    <TabsTrigger value="shows">TV Shows</TabsTrigger>
    <TabsTrigger value="music">Music</TabsTrigger>
  </TabsList>
  <TabsContent value="movies">
    <p>Movie catalog content here.</p>
  </TabsContent>
  <TabsContent value="shows">
    <p>TV show catalog content here.</p>
  </TabsContent>
  <TabsContent value="music">
    <p>Music catalog content here.</p>
  </TabsContent>
</Tabs>

// Controlled (state managed externally)
function MediaBrowser() {
  const [activeTab, setActiveTab] = useState('movies');

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="movies">Movies</TabsTrigger>
        <TabsTrigger value="shows">TV Shows</TabsTrigger>
      </TabsList>
      <TabsContent value="movies">
        <MovieList />
      </TabsContent>
      <TabsContent value="shows">
        <ShowList />
      </TabsContent>
    </Tabs>
  );
}

// With disabled trigger
<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Available</TabsTrigger>
    <TabsTrigger value="tab2" disabled>Coming Soon</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content here</TabsContent>
</Tabs>
```

#### Sub-Components

| Component | Role | Purpose |
|---|---|---|
| `Tabs` | Container + Context Provider | Root wrapper; manages active tab state |
| `TabsList` | `tablist` | Horizontal container for tab triggers |
| `TabsTrigger` | `tab` | Clickable tab button; sets active tab |
| `TabsContent` | `tabpanel` | Content panel; only renders when its `value` matches |

---

### Progress

A progress bar with optional percentage label.

```tsx
import { Progress } from 'ui-components-react';

// Basic progress bar
<Progress value={45} />

// With label showing percentage
<Progress value={72} showLabel />

// Custom max value
<Progress value={3} max={10} showLabel />

// Full progress
<Progress value={100} showLabel />

// Zero progress
<Progress value={0} showLabel />

// Animated progress (the bar width transition is built in)
function DownloadProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 5, 100));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return <Progress value={progress} showLabel />;
}
```

The progress bar automatically clamps the value between 0 and `max`, and includes a smooth CSS transition on width changes.

---

### Textarea

A multi-line text input with optional label and error message.

```tsx
import { Textarea } from 'ui-components-react';

// Basic textarea
<Textarea placeholder="Enter description..." />

// With label
<Textarea label="Description" placeholder="Describe the media item..." />

// With error
<Textarea
  label="Notes"
  error="Notes cannot be empty"
/>

// With rows and other HTML attributes
<Textarea
  label="Comments"
  rows={6}
  maxLength={500}
  placeholder="Add your comments..."
/>

// Disabled
<Textarea label="Read Only" value="This cannot be edited" disabled />

// Controlled textarea
function NotesEditor() {
  const [notes, setNotes] = useState('');

  return (
    <Textarea
      label="Notes"
      value={notes}
      onChange={(e) => setNotes(e.target.value)}
      placeholder="Write your notes..."
      rows={4}
    />
  );
}
```

---

## Utility Function

### cn()

The `cn()` function merges CSS class names, filtering out falsy values:

```tsx
import { cn } from 'ui-components-react';

// Basic usage
cn('px-4', 'py-2', 'text-sm');
// => 'px-4 py-2 text-sm'

// Conditional classes
cn('base-class', isActive && 'active-class', hasError && 'error-class');
// => 'base-class active-class' (if isActive=true, hasError=false)

// Works with undefined and null
cn('always', undefined, null, false, 'also-always');
// => 'always also-always'
```

## Customization

### Overriding Styles with className

Every component accepts a `className` prop. Tailwind CSS classes passed through `className` are appended after the component's default classes:

```tsx
// Override width
<Button className="w-full">Full Width Button</Button>

// Override colors
<Badge className="bg-purple-100 text-purple-800">Custom Color</Badge>

// Add margin/padding
<Card className="mt-8 max-w-lg">
  <CardContent>Spaced and sized card</CardContent>
</Card>

// Override on Input
<Input className="bg-yellow-50" placeholder="Highlighted input" />
```

### Dark Mode

All components include `dark:` variant classes. To enable dark mode, configure Tailwind CSS for class-based dark mode and add the `dark` class to an ancestor element:

```html
<!-- In your HTML or layout -->
<html class="dark">
  <!-- All components will render in dark mode -->
</html>
```

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
};
```

### Using Refs

All components support `ref` forwarding for DOM access:

```tsx
import { useRef } from 'react';
import { Input, Button } from 'ui-components-react';

function FocusExample() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <Input ref={inputRef} label="Name" />
      <Button onClick={() => inputRef.current?.focus()}>
        Focus Input
      </Button>
    </div>
  );
}
```

## Complete Example

A media item editing form combining multiple components:

```tsx
import {
  Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
  Button, Input, Select, Textarea, Badge, Switch, Tabs, TabsList,
  TabsTrigger, TabsContent, Progress,
} from 'ui-components-react';
import { useState } from 'react';

function MediaEditor() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('movie');
  const [description, setDescription] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [saving, setSaving] = useState(false);

  const handleSave = async () => {
    setSaving(true);
    // ... save logic
    setSaving(false);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>Edit Media Item</CardTitle>
          <Badge variant="secondary">Draft</Badge>
        </div>
        <CardDescription>Update the details of your media item.</CardDescription>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="details">
          <TabsList>
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="metadata">Metadata</TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <div className="space-y-4 mt-4">
              <Input
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter media title"
              />

              <Select
                label="Category"
                options={[
                  { value: 'movie', label: 'Movie' },
                  { value: 'tv', label: 'TV Show' },
                  { value: 'music', label: 'Music' },
                  { value: 'audiobook', label: 'Audiobook' },
                ]}
                value={category}
                onChange={setCategory}
              />

              <Textarea
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe this media item..."
                rows={4}
              />

              <div className="flex items-center gap-3">
                <Switch checked={isPublic} onCheckedChange={setIsPublic} />
                <span className="text-sm">Make this item public</span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="metadata">
            <div className="space-y-4 mt-4">
              <Progress value={65} showLabel />
              <p className="text-sm text-gray-500">
                65% of metadata has been auto-detected.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>

      <CardFooter className="justify-end gap-2">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave} loading={saving}>
          Save Changes
        </Button>
      </CardFooter>
    </Card>
  );
}
```
