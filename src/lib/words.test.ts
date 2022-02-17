import { getColorAt, seededRandom, seededRandomInt } from './words'
import fc from 'fast-check'

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

describe('seededRandom', () => {
  it('should 0 <= seededRandom(n) <= 1', () => {
    fc.assert(
      fc.property(fc.nat(), (n) => {
        const x = seededRandom(n)
        return 0 <= x && x <= 1
      })
    )
  })
})

describe('seededRandomInt', () => {
  it('should min <= seededRondom(n) <= max', () => {
    fc.assert(
      fc.property(
        fc
          .tuple(fc.integer(), fc.integer(), fc.nat())
          .filter(([min, max]) => min < max),
        ([min, max, n]) => {
          const x = seededRandomInt(min, max, n)
          return min <= x && x <= max
        }
      )
    )
  })
})
