import { describe, it, expect } from 'bun:test'
import { isEscapeDuringComposition } from '../rich-text-input'

describe('isEscapeDuringComposition', () => {
  it('returns true for Escape during IME composition', () => {
    expect(isEscapeDuringComposition({ key: 'Escape', nativeEvent: { isComposing: true } })).toBe(true)
  })

  it('returns false when not composing', () => {
    expect(isEscapeDuringComposition({ key: 'Escape', nativeEvent: { isComposing: false } })).toBe(false)
  })

  it('returns false for non-Escape keys', () => {
    expect(isEscapeDuringComposition({ key: 'Enter', nativeEvent: { isComposing: true } })).toBe(false)
  })

  it('returns false when nativeEvent is missing', () => {
    expect(isEscapeDuringComposition({ key: 'Escape' })).toBe(false)
  })
})

