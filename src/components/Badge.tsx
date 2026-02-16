import React from 'react'
import { cn } from '../lib/utils'

export type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
  destructive: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
  outline: 'border border-gray-300 text-gray-800 bg-transparent dark:border-gray-600 dark:text-gray-300',
}

const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(baseClasses, variantClasses[variant], className)}
        {...props}
      />
    )
  }
)

Badge.displayName = 'Badge'

export { Badge }
