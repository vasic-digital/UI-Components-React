import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoadingSpinner } from '../LoadingSpinner'

describe('LoadingSpinner', () => {
  it('renders with role status', () => {
    render(<LoadingSpinner />)
    expect(screen.getByRole('status')).toBeDefined()
  })

  it('renders label text', () => {
    render(<LoadingSpinner label="Loading data..." />)
    expect(screen.getByText('Loading data...')).toBeDefined()
  })

  it('renders sr-only text', () => {
    render(<LoadingSpinner />)
    expect(screen.getByText('Loading...')).toBeDefined()
  })

  it('applies size classes', () => {
    const { container } = render(<LoadingSpinner size="lg" />)
    const spinner = container.querySelector('.animate-spin')
    expect(spinner?.className).toContain('h-12')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<LoadingSpinner ref={ref} />)
    expect(ref.current).toBeDefined()
  })
})
