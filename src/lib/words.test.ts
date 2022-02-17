import { getColorAt } from './words'

describe('getColorAt', () => {
  it.each([
    [0, '000000'],
    [15, '00000F'],
    [16, '000010'],
    [255, '0000FF'],
    [256, '000100'],
    [256 * 256 * 256 - 1, 'FFFFFF'],
  ])('returns "$1" for $0', (index, color) => {
    expect(getColorAt(index)).toBe(color)
  })
})
