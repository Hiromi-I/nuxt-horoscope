import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/vue'
import SignItem from '@/components/SignItem.vue'

const result = {
  content: '年下の同僚には、気前のいいところを見せてあげて。あなたを慕ってくれる人が、これから良いパートナーになってくれそう。',
  item: 'マウス',
  money: 4,
  total: 3,
  job: 3,
  color: 'パープル',
  day: 15,
  love: 4,
  rank: 6,
  sign: '牡羊座',
}

describe('SignItem', () => {
  it('reder fortune result', () => {
    const props = { result }
    const { getByRole, getAllByRole, getByText } = render(SignItem, { props })

    const image = getByRole('img')
    const name = getByRole('heading', { level: 2 })
    const datas = getAllByRole('definition')
    const content = getByText('年下の同僚には、気前のいいところを見せてあげて。あなたを慕ってくれる人が、これから良いパートナーになってくれそう。')

    expect(image.getAttribute('src')).toMatch(/aries.jpg$/)
    expect(name.textContent).toMatch(/牡羊座/)
    expect(content).toBeInTheDocument()
    expect(datas[0].textContent).toMatch(/マウス/)
    expect(datas[1].textContent).toMatch(/パープル/)
    expect(datas[2].textContent).toMatch(/★★★☆☆/)
    expect(datas[3].textContent).toMatch(/★★★★☆/)
    expect(datas[4].textContent).toMatch(/★★★☆☆/)
    expect(datas[5].textContent).toMatch(/★★★★☆/)
  })
})