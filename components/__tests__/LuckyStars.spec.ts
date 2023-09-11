import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import LuckyStars from '@/components/LuckyStars.vue'

describe('LuckyStars', () => {
  it('reder 3 stars', () => {
    const props = { score: 3 }
    const { getAllByText } = render(LuckyStars, { props })

    const filledStars = getAllByText('★')
    const emptyStars = getAllByText('☆')

    expect(filledStars).toHaveLength(3)
    expect(emptyStars).toHaveLength(2)
  })

  it('reder 5 stars', () => {
    const props = { score: 5 }
    const { getAllByText, queryAllByText } = render(LuckyStars, { props })

    const filledStars = getAllByText('★')
    const emptyStars = queryAllByText('☆')

    expect(filledStars).toHaveLength(5)
    expect(emptyStars).toHaveLength(0)
  })

  it('reder 0 stars', () => {
    const props = { score: 0 }
    const { getAllByText, queryAllByText } = render(LuckyStars, { props })

    const filledStars = queryAllByText('★')
    const emptyStars = getAllByText('☆')

    expect(filledStars).toHaveLength(0)
    expect(emptyStars).toHaveLength(5)
  })
})
