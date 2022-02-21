import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'

type Props = {
  guess: string
  isRevealing?: boolean
  isShareColor?: boolean
}

export const CompletedRow = ({ guess, isRevealing, isShareColor }: Props) => {
  const statuses = getGuessStatuses(guess)

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell
          key={i}
          value={letter}
          status={statuses[i]}
          position={i}
          isRevealing={isRevealing}
          isCompleted
          color={guess}
          isShareColor={isShareColor}
        />
      ))}
    </div>
  )
}
