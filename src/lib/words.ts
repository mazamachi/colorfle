import { WRONG_SPOT_MESSAGE, NOT_CONTAINED_MESSAGE } from '../constants/strings'
import { getGuessStatuses } from './statuses'

/**
 * 入力された word がカラーコードとして正しいか？
 */
export const isWordInWordList = (word: string) =>
  /^[0-9A-F]{6}$/.test(word.toUpperCase())

export const isWinningWord = (word: string) => {
  return solution === word
}

// build a set of previously revealed letters - present and correct
// guess must use correct letters in that space and any other revealed letters
// also check if all revealed instances of a letter are used (i.e. two C's)
export const findFirstUnusedReveal = (word: string, guesses: string[]) => {
  if (guesses.length === 0) {
    return false
  }

  const lettersLeftArray = new Array<string>()
  const guess = guesses[guesses.length - 1]
  const statuses = getGuessStatuses(guess)

  for (let i = 0; i < guess.length; i++) {
    if (statuses[i] === 'correct' || statuses[i] === 'present') {
      lettersLeftArray.push(guess[i])
    }
    if (statuses[i] === 'correct' && word[i] !== guess[i]) {
      return WRONG_SPOT_MESSAGE(guess[i], i + 1)
    }
  }

  // check for the first unused letter, taking duplicate letters
  // into account - see issue #198
  let n
  for (const letter of word) {
    n = lettersLeftArray.indexOf(letter)
    if (n !== -1) {
      lettersLeftArray.splice(n, 1)
    }
  }

  if (lettersLeftArray.length > 0) {
    return NOT_CONTAINED_MESSAGE(lettersLeftArray[0])
  }
  return false
}

export const getWordOfDay = () => {
  // 2022-02-17 Game Epoch
  const epochMs = new Date('2022-02-17 00:00:00').valueOf()
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  const colorNum = 256 * 256 * 256
  const randomedIndex = seededRandomInt(0, colorNum - 1, index)

  return {
    solution: getColorAt(randomedIndex),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

/**
 * 与えられたシードを元に 0 以上 1 以下の乱数を返す関数。
 * from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
 *
 * @param seed シード値。0以上の数。
 */
export function seededRandom(seed: number): number {
  seed = (seed * 9301 + 49297) % 233280
  const rnd = seed / 233280

  return rnd
}

/**
 * 与えられたシードを元に min 以上 max 以下の整数の乱数を返す関数。
 */
export function seededRandomInt(
  min: number,
  max: number,
  seed: number
): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(seededRandom(seed) * (max - min) + min)
}

/**
 * n 番目のカラーコードを取得する関数
 *
 * @param n 0以上256*256*256未満の整数
 */
export function getColorAt(n: number): string {
  const blueNum = n % 256
  const greenNum = (n >> 8) % 256
  const redNum = ((n >> 8) >> 8) % 256
  return [redNum, greenNum, blueNum]
    .map((x) => x.toString(16).padStart(2, '0'))
    .join('')
    .toUpperCase()
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
