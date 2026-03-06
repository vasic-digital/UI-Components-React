import React from 'react'
import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ErrorBoundary } from '../ErrorBoundary'

function ThrowingComponent() {
  throw new Error('Test error')
}

function WorkingComponent() {
  return <div>Works fine</div>
}

describe('ErrorBoundary', () => {
  // Suppress console.error for expected errors in tests
  const originalError = console.error
  beforeAll(() => { console.error = vi.fn() })
  afterAll(() => { console.error = originalError })

  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <WorkingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Works fine')).toBeDefined()
  })

  it('renders default fallback on error', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Something went wrong')).toBeDefined()
    expect(screen.getByText('Test error')).toBeDefined()
  })

  it('renders custom fallback on error', () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByText('Custom fallback')).toBeDefined()
  })

  it('calls onError callback', () => {
    const onError = vi.fn()
    render(
      <ErrorBoundary onError={onError}>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    expect(onError).toHaveBeenCalled()
    expect(onError.mock.calls[0][0].message).toBe('Test error')
  })

  it('has alert role on error', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>,
    )
    expect(screen.getByRole('alert')).toBeDefined()
  })
})
