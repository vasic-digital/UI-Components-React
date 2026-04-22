import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Avatar } from '../Avatar'

describe('Avatar', () => {
  it('renders initials when no image', () => {
    render(<Avatar name="John Doe" />)
    expect(screen.getByText('JD')).toBeDefined()
  })

  it('renders single initial for single name', () => {
    render(<Avatar name="Alice" />)
    expect(screen.getByText('A')).toBeDefined()
  })

  it('renders image when imageUrl provided', () => {
    const { container } = render(<Avatar name="John" imageUrl="https://example.com/img.jpg" />)
    const img = container.querySelector('img')
    expect(img).toBeDefined()
    expect(img?.getAttribute('src')).toBe('https://example.com/img.jpg')
  })

  it('shows presence indicator', () => {
    const { container } = render(<Avatar name="John" presence="online" />)
    const indicator = container.querySelector('.bg-green-500')
    expect(indicator).toBeDefined()
  })

  it('applies size classes', () => {
    const { container } = render(<Avatar name="John" size="lg" />)
    expect((container.firstChild as HTMLElement)?.className).toContain('h-12')
  })

  it('accepts className prop', () => {
    const { container } = render(<Avatar name="John" className="my-custom" />)
    expect((container.firstChild as HTMLElement)?.className).toContain('my-custom')
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<Avatar name="John" ref={ref} />)
    expect(ref.current).toBeDefined()
  })
})
