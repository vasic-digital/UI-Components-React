import React from 'react'
import { cn } from '../lib/utils'

/**
 * Props for the EmptyState component.
 */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Heading text for the empty state. */
  title: string
  /** Optional descriptive text below the title. */
  description?: string
  /** Optional icon or illustration rendered above the title. */
  icon?: React.ReactNode
  /** Optional action element (e.g., a button) rendered below the description. */
  action?: React.ReactNode
}

/**
 * Centered placeholder for views with no content. Displays an optional icon,
 * title, description, and call-to-action element.
 */
const EmptyState = React.forwardRef<HTMLDivElement, EmptyStateProps>(
  ({ title, description, icon, action, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-col items-center justify-center py-12 text-center',
          className,
        )}
        {...props}
      >
        {icon && (
          <div className="mb-4 text-gray-400 dark:text-gray-500">{icon}</div>
        )}
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        {description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {description}
          </p>
        )}
        {action && <div className="mt-4">{action}</div>}
      </div>
    )
  },
)

EmptyState.displayName = 'EmptyState'

export { EmptyState }
