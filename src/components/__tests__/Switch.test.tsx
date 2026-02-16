import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Switch } from '../Switch'

describe('Switch', () => {
  it('renders as a switch role', () => {
    render(<Switch />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toBeInTheDocument()
  })

  it('renders in unchecked state by default', () => {
    render(<Switch />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveAttribute('aria-checked', 'false')
  })

  it('renders in checked state when checked is true', () => {
    render(<Switch checked />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveAttribute('aria-checked', 'true')
  })

  it('applies checked styling when checked', () => {
    render(<Switch checked />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveClass('bg-blue-600')
  })

  it('applies unchecked styling when not checked', () => {
    render(<Switch checked={false} />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveClass('bg-gray-200')
  })

  it('calls onCheckedChange when clicked', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Switch checked={false} onCheckedChange={handleChange} />)

    await user.click(screen.getByRole('switch'))
    expect(handleChange).toHaveBeenCalledWith(true)
  })

  it('toggles from checked to unchecked on click', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Switch checked onCheckedChange={handleChange} />)

    await user.click(screen.getByRole('switch'))
    expect(handleChange).toHaveBeenCalledWith(false)
  })

  it('does not toggle when disabled', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Switch checked={false} onCheckedChange={handleChange} disabled />)

    await user.click(screen.getByRole('switch'))
    expect(handleChange).not.toHaveBeenCalled()
  })

  it('applies disabled styling', () => {
    render(<Switch disabled />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toBeDisabled()
    expect(switchEl).toHaveClass('opacity-50')
    expect(switchEl).toHaveClass('cursor-not-allowed')
  })

  it('applies custom className', () => {
    render(<Switch className="custom-switch" />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl).toHaveClass('custom-switch')
  })

  it('forwards ref to the button element', () => {
    const ref = React.createRef<HTMLButtonElement>()
    render(<Switch ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })

  it('renders as a button with type="button"', () => {
    render(<Switch />)
    const switchEl = screen.getByRole('switch')
    expect(switchEl.tagName).toBe('BUTTON')
    expect(switchEl).toHaveAttribute('type', 'button')
  })

  it('has correct display name', () => {
    expect(Switch.displayName).toBe('Switch')
  })
})
