import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Textarea } from '../Textarea'

describe('Textarea', () => {
  it('renders with default props', () => {
    render(<Textarea />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeInTheDocument()
    expect(textarea.tagName).toBe('TEXTAREA')
  })

  it('handles text input', async () => {
    const user = userEvent.setup()
    render(<Textarea />)
    const textarea = screen.getByRole('textbox')

    await user.type(textarea, 'Hello World')
    expect(textarea).toHaveValue('Hello World')
  })

  it('accepts placeholder text', () => {
    render(<Textarea placeholder="Enter your message" />)
    expect(screen.getByPlaceholderText('Enter your message')).toBeInTheDocument()
  })

  it('renders a label when provided', () => {
    render(<Textarea label="Description" />)
    expect(screen.getByText('Description')).toBeInTheDocument()
  })

  it('renders an error message when provided', () => {
    render(<Textarea error="This field is required" />)
    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('applies error styling when error is present', () => {
    render(<Textarea error="Required" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('border-red-500')
    expect(textarea).toHaveClass('focus:ring-red-500')
  })

  it('can be disabled', () => {
    render(<Textarea disabled />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toBeDisabled()
  })

  it('applies custom className', () => {
    render(<Textarea className="custom-textarea" />)
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveClass('custom-textarea')
  })

  it('forwards ref to the textarea element', () => {
    const ref = React.createRef<HTMLTextAreaElement>()
    render(<Textarea ref={ref} />)
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement)
  })

  it('forwards additional props', () => {
    render(<Textarea data-testid="msg" rows={5} maxLength={500} />)
    const textarea = screen.getByTestId('msg')
    expect(textarea).toHaveAttribute('rows', '5')
    expect(textarea).toHaveAttribute('maxLength', '500')
  })

  it('does not render label when not provided', () => {
    const { container } = render(<Textarea />)
    const labels = container.querySelectorAll('label')
    expect(labels).toHaveLength(0)
  })

  it('does not render error when not provided', () => {
    const { container } = render(<Textarea />)
    const errorMessages = container.querySelectorAll('.text-red-600')
    expect(errorMessages).toHaveLength(0)
  })

  it('has correct display name', () => {
    expect(Textarea.displayName).toBe('Textarea')
  })
})
