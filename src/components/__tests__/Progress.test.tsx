import React from 'react'
import { render, screen } from '@testing-library/react'
import { Progress } from '../Progress'

describe('Progress', () => {
  it('renders with required value prop', () => {
    render(<Progress value={50} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toBeInTheDocument()
  })

  it('sets correct aria attributes', () => {
    render(<Progress value={30} max={200} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuenow', '30')
    expect(progressbar).toHaveAttribute('aria-valuemin', '0')
    expect(progressbar).toHaveAttribute('aria-valuemax', '200')
  })

  it('calculates percentage correctly', () => {
    const { container } = render(<Progress value={50} max={100} />)
    const bar = container.querySelector('.bg-blue-500')
    expect(bar).toHaveStyle({ width: '50%' })
  })

  it('clamps percentage to 0-100 range', () => {
    const { container: overContainer } = render(<Progress value={150} max={100} />)
    const overBar = overContainer.querySelector('.bg-blue-500')
    expect(overBar).toHaveStyle({ width: '100%' })

    const { container: underContainer } = render(<Progress value={-10} max={100} />)
    const underBar = underContainer.querySelector('.bg-blue-500')
    expect(underBar).toHaveStyle({ width: '0%' })
  })

  it('shows label when showLabel is true', () => {
    render(<Progress value={75} showLabel />)
    expect(screen.getByText('Progress')).toBeInTheDocument()
    expect(screen.getByText('75%')).toBeInTheDocument()
  })

  it('hides label by default', () => {
    render(<Progress value={50} />)
    expect(screen.queryByText('Progress')).not.toBeInTheDocument()
    expect(screen.queryByText('50%')).not.toBeInTheDocument()
  })

  it('uses max=100 by default', () => {
    render(<Progress value={25} />)
    const progressbar = screen.getByRole('progressbar')
    expect(progressbar).toHaveAttribute('aria-valuemax', '100')
  })

  it('applies custom className', () => {
    render(<Progress value={50} className="custom-progress" data-testid="progress" />)
    const wrapper = screen.getByTestId('progress')
    expect(wrapper).toHaveClass('custom-progress')
    expect(wrapper).toHaveClass('w-full')
  })

  it('forwards ref to the wrapper div', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Progress ref={ref} value={50} />)
    expect(ref.current).toBeInstanceOf(HTMLDivElement)
  })

  it('forwards additional props', () => {
    render(<Progress value={50} data-testid="my-progress" aria-label="Upload progress" />)
    const wrapper = screen.getByTestId('my-progress')
    expect(wrapper).toHaveAttribute('aria-label', 'Upload progress')
  })

  it('has correct display name', () => {
    expect(Progress.displayName).toBe('Progress')
  })

  it('rounds percentage in label display', () => {
    render(<Progress value={33} max={100} showLabel />)
    expect(screen.getByText('33%')).toBeInTheDocument()
  })
})
