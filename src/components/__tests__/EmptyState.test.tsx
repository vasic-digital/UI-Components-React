import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { EmptyState } from '../EmptyState'

describe('EmptyState', () => {
  it('renders title', () => {
    render(<EmptyState title="No items" />)
    expect(screen.getByText('No items')).toBeDefined()
  })

  it('renders description', () => {
    render(<EmptyState title="No items" description="Add your first item" />)
    expect(screen.getByText('Add your first item')).toBeDefined()
  })

  it('renders icon', () => {
    render(<EmptyState title="No items" icon={<span data-testid="icon">📭</span>} />)
    expect(screen.getByTestId('icon')).toBeDefined()
  })

  it('renders action', () => {
    render(<EmptyState title="No items" action={<button>Add Item</button>} />)
    expect(screen.getByText('Add Item')).toBeDefined()
  })

  it('forwards ref', () => {
    const ref = React.createRef<HTMLDivElement>()
    render(<EmptyState title="No items" ref={ref} />)
    expect(ref.current).toBeDefined()
  })
})
