import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Badge,
  Select,
  Switch,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
  Progress,
  Textarea,
  cn,
} from '../index'

describe('index exports', () => {
  it('exports all UI components', () => {
    expect(Button).toBeDefined()
    expect(Card).toBeDefined()
    expect(CardHeader).toBeDefined()
    expect(CardTitle).toBeDefined()
    expect(CardDescription).toBeDefined()
    expect(CardContent).toBeDefined()
    expect(CardFooter).toBeDefined()
    expect(Input).toBeDefined()
    expect(Badge).toBeDefined()
    expect(Select).toBeDefined()
    expect(Switch).toBeDefined()
    expect(Tabs).toBeDefined()
    expect(TabsList).toBeDefined()
    expect(TabsTrigger).toBeDefined()
    expect(TabsContent).toBeDefined()
    expect(Progress).toBeDefined()
    expect(Textarea).toBeDefined()
  })

  it('exports the cn utility function', () => {
    expect(cn).toBeDefined()
    expect(typeof cn).toBe('function')
    expect(cn('a', 'b')).toBe('a b')
  })

  it('all components are valid React components (functions)', () => {
    const components = [
      Button, Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter,
      Input, Badge, Select, Switch, Tabs, TabsList, TabsTrigger, TabsContent,
      Progress, Textarea,
    ]

    components.forEach((component) => {
      expect(typeof component).toBe('object') // forwardRef returns an object
    })
  })
})
