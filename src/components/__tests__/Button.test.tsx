import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from '../Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('renders as a button element', () => {
    render(<Button data-testid="btn">Test</Button>)
    expect(screen.getByTestId('btn').tagName).toBe('BUTTON')
  })

  it('applies primary variant classes by default', () => {
    render(<Button data-testid="btn">Primary</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('bg-blue-600')
    expect(btn).toHaveClass('text-white')
  })

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary" data-testid="btn">Secondary</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('bg-gray-100')
    expect(btn).toHaveClass('text-gray-900')
  })

  it('applies outline variant classes', () => {
    render(<Button variant="outline" data-testid="btn">Outline</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('border')
    expect(btn).toHaveClass('bg-white')
  })

  it('applies ghost variant classes', () => {
    render(<Button variant="ghost" data-testid="btn">Ghost</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('hover:bg-gray-100')
  })

  it('applies destructive variant classes', () => {
    render(<Button variant="destructive" data-testid="btn">Delete</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('bg-red-600')
    expect(btn).toHaveClass('text-white')
  })

  it('applies sm size classes', () => {
    render(<Button size="sm" data-testid="btn">Small</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('h-9')
    expect(btn).toHaveClass('px-3')
    expect(btn).toHaveClass('text-sm')
  })

  it('applies md size classes by default', () => {
    render(<Button data-testid="btn">Medium</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('h-10')
    expect(btn).toHaveClass('px-4')
  })

  it('applies lg size classes', () => {
    render(<Button size="lg" data-testid="btn">Large</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('h-11')
    expect(btn).toHaveClass('px-8')
  })

  it('applies base classes', () => {
    render(<Button data-testid="btn">Base</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('inline-flex')
    expect(btn).toHaveClass('items-center')
    expect(btn).toHaveClass('justify-center')
    expect(btn).toHaveClass('rounded-lg')
    expect(btn).toHaveClass('font-medium')
  })

  it('applies custom className', () => {
    render(<Button className="custom-class" data-testid="btn">Custom</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveClass('custom-class')
    expect(btn).toHaveClass('inline-flex')
  })

  it('handles click events', () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Click</Button>)
    fireEvent.click(screen.getByText('Click'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled data-testid="btn">Disabled</Button>)
    expect(screen.getByTestId('btn')).toBeDisabled()
  })

  it('is disabled when loading prop is true', () => {
    render(<Button loading data-testid="btn">Loading</Button>)
    expect(screen.getByTestId('btn')).toBeDisabled()
  })

  it('shows loading spinner when loading', () => {
    render(<Button loading>Saving</Button>)
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
    expect(screen.getByText('Saving')).toBeInTheDocument()
  })

  it('does not show loading spinner when not loading', () => {
    render(<Button>Normal</Button>)
    expect(screen.queryByTestId('loading-spinner')).toBeNull()
  })

  it('forwards ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Button ref={ref}>Ref button</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    expect(ref.current?.textContent).toContain('Ref button')
  })

  it('forwards additional HTML attributes', () => {
    render(<Button data-testid="btn" aria-label="submit form" type="submit">Submit</Button>)
    const btn = screen.getByTestId('btn')
    expect(btn).toHaveAttribute('aria-label', 'submit form')
    expect(btn).toHaveAttribute('type', 'submit')
  })

  it('has correct display name', () => {
    expect(Button.displayName).toBe('Button')
  })

  it('does not fire onClick when disabled', () => {
    const onClick = vi.fn()
    render(<Button disabled onClick={onClick} data-testid="btn">Disabled</Button>)
    fireEvent.click(screen.getByTestId('btn'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
