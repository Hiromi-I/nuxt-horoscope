import { describe, test, expect } from 'vitest'
import { getImagePath } from '@/utils/sign'

describe('sign', () => {
  test('aries', () => {
    const jSignName = '牡羊座'

    const imagePath = getImagePath(jSignName)

    expect(imagePath).toMatch(/\/assets\/images\/aries.jpg$/)
  })

  test('aries', () => {
    const jSignName = '牡牛座'

    const imagePath = getImagePath(jSignName)

    expect(imagePath).toMatch(/\/assets\/images\/taurus.jpg$/)
  })
})
