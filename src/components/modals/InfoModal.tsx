import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the color of the tile above in 6 tries. After each guess, the
        color of the tiles will change to show how close your guess was to the
        color. And the color of the characters will be the color your guess.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="F"
          status="correct"
          color="FF0000"
        />
        <Cell value="F" color="FF0000" />
        <Cell value="0" color="FF0000" />
        <Cell value="0" color="FF0000" />
        <Cell value="0" color="FF0000" />
        <Cell value="0" color="FF0000" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter F is in the color code and in the correct spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="0" color="008000" />
        <Cell value="0" color="008000" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="8"
          color="008000"
          status="present"
        />
        <Cell value="0" color="008000" />
        <Cell value="0" color="008000" />
        <Cell value="0" color="008000" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter 8 is in the color code but in the wrong spot.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="0" color="0000CD" />
        <Cell value="0" color="0000CD" />
        <Cell value="0" color="0000CD" />
        <Cell value="0" color="0000CD" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="C"
          color="0000CD"
          status="absent"
        />
        <Cell value="D" color="0000CD" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not in the color code in any spot.
      </p>

      <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
        Colorfle by{' '}
        <a href="https://twitter.com/mazamachi" className="underline font-bold">
          @mazamachi
        </a>
        .
      </p>
      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Forked from{' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >
          react-wordle
        </a>
        .
      </p>
    </BaseModal>
  )
}
