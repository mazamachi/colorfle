import classnames from 'classnames'

type Props = {
  color: string
  width?: number
}

export const ColorPanel = ({ color, width = 40 }: Props) => {
  const classes = classnames('rounded w-80 h-20 mx-auto mb-8 select-none')

  const styles = {
    backgroundColor: `#${color}`,
  }

  return (
    <div style={styles} className={classes}>
      <div dangerouslySetInnerHTML={{ __html: "<!-- DON'T CHEAT!!! -->" }} />
    </div>
  )
}
