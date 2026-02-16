/**
 * Utility function for merging CSS class names.
 * Filters out falsy values and joins remaining classes with a space.
 */
export function cn(...classes: (string | number | boolean | undefined | null)[]): string {
  return classes.filter((c): c is string => typeof c === 'string' && c.length > 0).join(' ')
}
