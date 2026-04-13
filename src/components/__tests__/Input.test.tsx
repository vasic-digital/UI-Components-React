import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from '../Input'

describe('Input', () => {
  it('renders an input element', () => {
    render(<Input data-testid="input" />)
    expect(screen.getByTestId('input').tagName).toBe('INPUT')
  })

  it('applies base classes', () => {
    render(<Input data-testid="input" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveClass('flex')
    expect(input).toHaveClass('h-11')
    expect(input).toHaveClass('w-full')
    expect(input).toHaveClass('rounded-lg')
    expect(input).toHaveClass('border')
  })

  it('applies custom className', () => {
    render(<Input data-testid="input" className="extra-class" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveClass('extra-class')
    expect(input).toHaveClass('flex')
  })

  it('renders with the correct type', () => {
    render(<Input data-testid="input" type="password" />)
    expect(screen.getByTestId('input')).toHaveAttribute('type', 'password')
  })

  it('defaults to no specific type attribute', () => {
    render(<Input data-testid="input" />)
    // When no type is specified, the default HTML input type applies
    expect(screen.getByTestId('input')).toBeInTheDocument()
  })

  it('renders label when provided', () => {
    render(<Input label="Email Address" data-testid="input" />)
    expect(screen.getByText('Email Address')).toBeInTheDocument()
  })

  it('does not render label when not provided', () => {
    const { container } = render(<Input data-testid="input" />)
    expect(container.querySelector('label')).toBeNull()
  })

  it('renders error message when provided', () => {
    render(<Input error="This field is required" data-testid="input" />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('does not render error message when not provided', () => {
    const { container } = render(<Input data-testid="input" />)
    const errorP = container.querySelector('.text-red-600')
    expect(errorP).toBeNull()
  })

  it('applies error border class when error is provided', () => {
    render(<Input error="Error" data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveClass('border-red-500')
  })

  it('does not apply error border class when no error', () => {
    render(<Input data-testid="input" />)
    expect(screen.getByTestId('input')).not.toHaveClass('border-red-500')
  })

  it('renders icon when provided', () => {
    const icon = <span data-testid="icon">@</span>
    render(<Input icon={icon} data-testid="input" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('applies padding-left class when icon is provided', () => {
    const icon = <span>@</span>
    render(<Input icon={icon} data-testid="input" />)
    expect(screen.getByTestId('input')).toHaveClass('pl-10')
  })

  it('does not apply padding-left class when no icon', () => {
    render(<Input data-testid="input" />)
    expect(screen.getByTestId('input')).not.toHaveClass('pl-10')
  })

  it('handles value changes', () => {
    const onChange = vi.fn()
    render(<Input data-testid="input" onChange={onChange} />)
    fireEvent.change(screen.getByTestId('input'), { target: { value: 'hello' } })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('supports placeholder text', () => {
    render(<Input data-testid="input" placeholder="Enter text..." />)
    expect(screen.getByTestId('input')).toHaveAttribute('placeholder', 'Enter text...')
  })

  it('supports disabled state', () => {
    render(<Input data-testid="input" disabled />)
    expect(screen.getByTestId('input')).toBeDisabled()
  })

  it('forwards ref to the input element', () => {
    const ref = React.createRef<HTMLInputElement>()
    render(<Input ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('forwards additional HTML attributes', () => {
    render(<Input data-testid="input" aria-label="search" autoComplete="off" />)
    const input = screen.getByTestId('input')
    expect(input).toHaveAttribute('aria-label', 'search')
    expect(input).toHaveAttribute('autocomplete', 'off')
  })

  it('has correct display name', () => {
    expect(Input.displayName).toBe('Input')
  })

  it('renders label with correct styling', () => {
    render(<Input label="Username" data-testid="input" />)
    const label = screen.getByText('Username')
    expect(label).toHaveClass('text-sm')
    expect(label).toHaveClass('font-medium')
  })

  it('renders error text with correct styling', () => {
    render(<Input error="Required field" data-testid="input" />)
    const errorText = screen.getByText('Required field')
    expect(errorText).toHaveClass('text-sm')
    expect(errorText).toHaveClass('text-red-600')
  })

  it('renders with both label and error simultaneously', () => {
    render(<Input label="Email" error="Invalid email" data-testid="input" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('renders with both icon and error simultaneously', () => {
    const icon = <span data-testid="icon">!</span>
    render(<Input icon={icon} error="Error occurred" data-testid="input" />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
    expect(screen.getByText('Error occurred')).toBeInTheDocument()
    expect(screen.getByTestId('input')).toHaveClass('pl-10')
    expect(screen.getByTestId('input')).toHaveClass('border-red-500')
  })
})
