import React from 'react'
import { cn } from '../lib/utils'

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
export type PresenceStatus = 'online' | 'away' | 'busy' | 'offline'

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  size?: AvatarSize
  imageUrl?: string
  presence?: PresenceStatus
}

const sizeClasses: Record<AvatarSize, string> = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
  xl: 'h-16 w-16 text-lg',
}

const presenceClasses: Record<PresenceStatus, string> = {
  online: 'bg-green-500',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
  offline: 'bg-gray-400',
}

const presenceSizeClasses: Record<AvatarSize, string> = {
  sm: 'h-2 w-2 ring-1',
  md: 'h-2.5 w-2.5 ring-2',
  lg: 'h-3 w-3 ring-2',
  xl: 'h-3.5 w-3.5 ring-2',
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part.charAt(0))
    .join('')
    .substring(0, 2)
    .toUpperCase()
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ name, size = 'md', imageUrl, presence, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative inline-flex items-center justify-center rounded-full bg-blue-100 font-medium text-blue-700 dark:bg-blue-900 dark:text-blue-200',
          sizeClasses[size],
          className,
        )}
        {...props}
      >
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full rounded-full object-cover"
          />
        ) : (
          <span>{getInitials(name)}</span>
        )}
        {presence && (
          <span
            className={cn(
              'absolute bottom-0 right-0 rounded-full ring-white dark:ring-gray-900',
              presenceClasses[presence],
              presenceSizeClasses[size],
            )}
          />
        )}
      </div>
    )
  },
)

Avatar.displayName = 'Avatar'

export { Avatar }
