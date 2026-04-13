import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../Card'

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card data-testid="card">Card content</Card>)
    expect(screen.getByTestId('card')).toHaveTextContent('Card content')
  })

  it('renders as a div element', () => {
    render(<Card data-testid="card">Content</Card>)
    expect(screen.getByTestId('card').tagName).toBe('DIV')
  })

  it('applies base classes', () => {
    render(<Card data-testid="card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('rounded-xl')
    expect(card).toHaveClass('border')
    expect(card).toHaveClass('bg-white')
    expect(card).toHaveClass('shadow-lg')
  })

  it('applies custom className', () => {
    render(<Card data-testid="card" className="custom-card">Content</Card>)
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('custom-card')
    expect(card).toHaveClass('rounded-xl')
  })

  it('forwards ref to the div element', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Card ref={ref}>Content</Card>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('forwards additional HTML attributes', () => {
    render(<Card data-testid="card" aria-label="info card">Content</Card>)
    expect(screen.getByTestId('card')).toHaveAttribute('aria-label', 'info card')
  })

  it('has correct display name', () => {
    expect(Card.displayName).toBe('Card')
  })
})

describe('CardHeader', () => {
  it('renders children correctly', () => {
    render(<CardHeader data-testid="header">Header content</CardHeader>)
    expect(screen.getByTestId('header')).toHaveTextContent('Header content')
  })

  it('applies base classes', () => {
    render(<CardHeader data-testid="header">Content</CardHeader>)
    const header = screen.getByTestId('header')
    expect(header).toHaveClass('flex')
    expect(header).toHaveClass('flex-col')
    expect(header).toHaveClass('p-6')
  })

  it('applies custom className', () => {
    render(<CardHeader data-testid="header" className="extra">Content</CardHeader>)
    expect(screen.getByTestId('header')).toHaveClass('extra')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<CardHeader ref={ref}>Content</CardHeader>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('has correct display name', () => {
    expect(CardHeader.displayName).toBe('CardHeader')
  })
})

describe('CardTitle', () => {
  it('renders children correctly', () => {
    render(<CardTitle data-testid="title">My Title</CardTitle>)
    expect(screen.getByTestId('title')).toHaveTextContent('My Title')
  })

  it('renders as an h3 element', () => {
    render(<CardTitle data-testid="title">Title</CardTitle>)
    expect(screen.getByTestId('title').tagName).toBe('H3')
  })

  it('applies base classes', () => {
    render(<CardTitle data-testid="title">Title</CardTitle>)
    const title = screen.getByTestId('title')
    expect(title).toHaveClass('font-semibold')
    expect(title).toHaveClass('leading-none')
    expect(title).toHaveClass('tracking-tight')
  })

  it('applies custom className', () => {
    render(<CardTitle data-testid="title" className="large-title">Title</CardTitle>)
    expect(screen.getByTestId('title')).toHaveClass('large-title')
  })

  it('forwards ref to the h3 element', () => {
    const ref = React.createRef<HTMLHeadingElement>()
    render(<CardTitle ref={ref}>Title</CardTitle>)
    expect(ref.current).toBeInstanceOf(HTMLHeadingElement)
  })

  it('has correct display name', () => {
    expect(CardTitle.displayName).toBe('CardTitle')
  })
})

describe('CardDescription', () => {
  it('renders children correctly', () => {
    render(<CardDescription data-testid="desc">Description text</CardDescription>)
    expect(screen.getByTestId('desc')).toHaveTextContent('Description text')
  })

  it('renders as a p element', () => {
    render(<CardDescription data-testid="desc">Text</CardDescription>)
    expect(screen.getByTestId('desc').tagName).toBe('P')
  })

  it('applies base classes', () => {
    render(<CardDescription data-testid="desc">Text</CardDescription>)
    const desc = screen.getByTestId('desc')
    expect(desc).toHaveClass('text-sm')
    expect(desc).toHaveClass('text-gray-600')
  })

  it('applies custom className', () => {
    render(<CardDescription data-testid="desc" className="italic">Text</CardDescription>)
    expect(screen.getByTestId('desc')).toHaveClass('italic')
  })

  it('forwards ref to the p element', () => {
    const ref = React.createRef<HTMLParagraphElement>()
    render(<CardDescription ref={ref}>Text</CardDescription>)
    expect(ref.current).toBeInstanceOf(HTMLParagraphElement)
  })

  it('has correct display name', () => {
    expect(CardDescription.displayName).toBe('CardDescription')
  })
})

describe('CardContent', () => {
  it('renders children correctly', () => {
    render(<CardContent data-testid="content">Body content</CardContent>)
    expect(screen.getByTestId('content')).toHaveTextContent('Body content')
  })

  it('applies base classes', () => {
    render(<CardContent data-testid="content">Content</CardContent>)
    const content = screen.getByTestId('content')
    expect(content).toHaveClass('p-6')
    expect(content).toHaveClass('pt-0')
  })

  it('applies custom className', () => {
    render(<CardContent data-testid="content" className="custom">Content</CardContent>)
    expect(screen.getByTestId('content')).toHaveClass('custom')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<CardContent ref={ref}>Content</CardContent>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('has correct display name', () => {
    expect(CardContent.displayName).toBe('CardContent')
  })
})

describe('CardFooter', () => {
  it('renders children correctly', () => {
    render(<CardFooter data-testid="footer">Footer content</CardFooter>)
    expect(screen.getByTestId('footer')).toHaveTextContent('Footer content')
  })

  it('applies base classes', () => {
    render(<CardFooter data-testid="footer">Footer</CardFooter>)
    const footer = screen.getByTestId('footer')
    expect(footer).toHaveClass('flex')
    expect(footer).toHaveClass('items-center')
    expect(footer).toHaveClass('p-6')
    expect(footer).toHaveClass('pt-0')
  })

  it('applies custom className', () => {
    render(<CardFooter data-testid="footer" className="justify-end">Footer</CardFooter>)
    expect(screen.getByTestId('footer')).toHaveClass('justify-end')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<CardFooter ref={ref}>Footer</CardFooter>)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('has correct display name', () => {
    expect(CardFooter.displayName).toBe('CardFooter')
  })
})

describe('Card composition', () => {
  it('renders a complete card with all sub-components', () => {
    render(
      <Card data-testid="card">
        <CardHeader data-testid="header">
          <CardTitle data-testid="title">Title</CardTitle>
          <CardDescription data-testid="desc">Description</CardDescription>
        </CardHeader>
        <CardContent data-testid="content">Body</CardContent>
        <CardFooter data-testid="footer">Actions</CardFooter>
      </Card>
    )

    expect(screen.getByTestId('card')).toBeInTheDocument()
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('title')).toHaveTextContent('Title')
    expect(screen.getByTestId('desc')).toHaveTextContent('Description')
    expect(screen.getByTestId('content')).toHaveTextContent('Body')
    expect(screen.getByTestId('footer')).toHaveTextContent('Actions')
  })
})
