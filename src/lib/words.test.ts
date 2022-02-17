import {
  getColorAt,
  isWordInWordList,
  seededRandom,
  seededRandomInt,
} from './words'
import fc from 'fast-check'

describe('isWordInWordList', () => {
  it.each([
    { color: '000000', expected: true },
    { color: 'FFFFFF', expected: true },
    { color: 'ffffff', expected: true },
    { color: '-00000', expected: false },
    { color: 'xxxxxx', expected: false },
    { color: 'XXXXXX', expected: false },
    { color: '0000000', expected: false },
    { color: '00000', expected: false },
  ])('returns "$expected" for $color', ({ color, expected }) => {
    expect(isWordInWordList(color)).toBe(expected)
  })
})

describe('getColorAt', () => {
  it.each([
    { index: 0, color: '000000' },
    { index: 15, color: '00000F' },
    { index: 16, color: '000010' },
    { index: 255, color: '0000FF' },
    { index: 256, color: '000100' },
    { index: 256 * 256 * 256 - 1, color: 'FFFFFF' },
  ])('returns "$1" for $0', ({ index, color }) => {
    expect(getColorAt(index)).toBe(color)
  })

  it('returns color code', () => {
    fc.assert(
      fc.property(
        fc.nat().filter((n) => n <= 256 * 256 * 256 - 1),
        (n) => isWordInWordList(getColorAt(n))
      )
    )
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
