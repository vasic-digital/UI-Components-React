import React from 'react'
import { cn } from '../lib/utils'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
}

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
