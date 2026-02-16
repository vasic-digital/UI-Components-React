import { cn } from '../lib/utils'

describe('cn (className utility)', () => {
  it('joins multiple class strings', () => {
    expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz')
  })

  it('filters out falsy values', () => {
    expect(cn('foo', undefined, 'bar', null, 'baz')).toBe('foo bar baz')
  })

  it('filters out boolean false', () => {
    expect(cn('foo', false, 'bar', true, 'baz')).toBe('foo bar baz')
  })

  it('filters out empty strings', () => {
    expect(cn('foo', '', 'bar', '', 'baz')).toBe('foo bar baz')
  })

  it('returns empty string when no valid classes', () => {
    expect(cn(undefined, null, false, '')).toBe('')
  })

  it('handles single class', () => {
    expect(cn('only-one')).toBe('only-one')
  })

  it('filters out numeric values', () => {
    // cn accepts number in its signature but filters non-strings
    expect(cn('foo', 0 as any, 'bar', 42 as any)).toBe('foo bar')
  })

  it('handles conditional classes', () => {
    const isActive = true
    const isDisabled = false
    expect(cn(
      'base',
      isActive && 'active',
      isDisabled && 'disabled',
    )).toBe('base active')
  })
})
