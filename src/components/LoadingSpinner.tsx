import React from 'react'
import { cn } from '../lib/utils'

export type SpinnerSize = 'sm' | 'md' | 'lg'

export interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpinnerSize
  label?: string
}

const sizeClasses: Record<SpinnerSize, string> = {
  sm: 'h-4 w-4 border-2',
  md: 'h-8 w-8 border-2',
  lg: 'h-12 w-12 border-3',
}

const LoadingSpinner = React.forwardRef<HTMLDivElement, LoadingSpinnerProps>(
  ({ size = 'md', label, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="status"
        className={cn('flex flex-col items-center justify-center gap-2', className)}
        {...props}
      >
        <div
          className={cn(
            'animate-spin rounded-full border-blue-600 border-t-transparent',
            sizeClasses[size],
          )}
        />
        {label && (
          <span className="text-sm text-gray-500 dark:text-gray-400">{label}</span>
        )}
        <span className="sr-only">Loading...</span>
      </div>
    )
  },
)

LoadingSpinner.displayName = 'LoadingSpinner'

export { LoadingSpinner }
