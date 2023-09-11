import { describe, test, vi, beforeEach, afterEach, expect } from 'vitest'
import { getToday, get10DaysLater } from '@/utils/date'

describe('date', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('today', () => {
    const now = new Date(2023, 1 - 1, 1)
    vi.setSystemTime(now)

    const today = getToday()

    expect(today).toMatch(/2023-01-01/)
  })

  test('10 days later', () => {
    const now = new Date(2023, 1 - 1, 1)
    vi.setSystemTime(now)

    const targetDate = get10DaysLater()

    expect(targetDate).toMatch(/2023-01-11/)
  })
})
