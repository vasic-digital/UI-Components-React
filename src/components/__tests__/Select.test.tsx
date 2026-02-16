import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select } from '../Select'

describe('Select', () => {
  const defaultOptions = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'cherry', label: 'Cherry' },
  ]

  it('renders with options prop', () => {
    render(<Select options={defaultOptions} />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()

    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Cherry')).toBeInTheDocument()
  })

  it('renders with children instead of options', () => {
    render(
      <Select>
        <option value="one">One</option>
        <option value="two">Two</option>
      </Select>
    )

    expect(screen.getByText('One')).toBeInTheDocument()
    expect(screen.getByText('Two')).toBeInTheDocument()
  })

  it('calls onChange when selection changes', async () => {
    const user = userEvent.setup()
    const handleChange = vi.fn()
    render(<Select options={defaultOptions} onChange={handleChange} />)

    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'banana')

    expect(handleChange).toHaveBeenCalledWith('banana')
  })

  it('calls onValueChange when selection changes', async () => {
    const user = userEvent.setup()
    const handleValueChange = vi.fn()
    render(<Select options={defaultOptions} onValueChange={handleValueChange} />)

    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'cherry')

    expect(handleValueChange).toHaveBeenCalledWith('cherry')
  })

  it('renders label when provided', () => {
    render(<Select options={defaultOptions} label="Fruit" />)
    expect(screen.getByText('Fruit')).toBeInTheDocument()
  })

  it('renders error message when provided', () => {
    render(<Select options={defaultOptions} error="Please select a fruit" />)
    expect(screen.getByText('Please select a fruit')).toBeInTheDocument()
  })

  it('applies error styling when error is present', () => {
    render(<Select options={defaultOptions} error="Required" />)
    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('border-red-500')
  })

  it('applies custom className', () => {
    render(<Select options={defaultOptions} className="custom-select" />)
    const select = screen.getByRole('combobox')
    expect(select).toHaveClass('custom-select')
  })

  it('can be disabled', () => {
    render(<Select options={defaultOptions} disabled />)
    const select = screen.getByRole('combobox')
    expect(select).toBeDisabled()
  })

  it('forwards ref to the select element', () => {
    const ref = React.createRef<HTMLSelectElement>()
    render(<Select ref={ref} options={defaultOptions} />)
    expect(ref.current).toBeInstanceOf(HTMLSelectElement)
  })

  it('forwards additional props', () => {
    render(<Select options={defaultOptions} data-testid="fruit-select" name="fruit" />)
    const select = screen.getByTestId('fruit-select')
    expect(select).toHaveAttribute('name', 'fruit')
  })

  it('has correct display name', () => {
    expect(Select.displayName).toBe('Select')
  })
})
