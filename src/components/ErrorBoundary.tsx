import React from 'react'
import { cn } from '../lib/utils'

/**
 * Props for the ErrorBoundary component.
 */
export interface ErrorBoundaryProps {
  /** Child components to render while no error has been caught. */
  children: React.ReactNode
  /** Custom fallback UI to render when an error is caught. */
  fallback?: React.ReactNode
  /** Callback invoked when an error is caught, receiving the error and component stack. */
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
  /** Optional CSS class applied to the default error alert container. */
  className?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

/**
 * React class component that catches JavaScript errors in its child tree and
 * renders a fallback UI instead of crashing. Supports a custom fallback prop
 * and an onError callback for error reporting.
 */
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.props.onError?.(error, errorInfo)
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div
          className={cn(
            'rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950',
            this.props.className,
          )}
          role="alert"
        >
          <h3 className="text-sm font-semibold text-red-800 dark:text-red-200">
            Something went wrong
          </h3>
          <p className="mt-1 text-sm text-red-700 dark:text-red-300">
            {this.state.error?.message || 'An unexpected error occurred'}
          </p>
        </div>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }
