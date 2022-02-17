import classnames from 'classnames'

type Props = {
  color: string
}

export const ColorPanel = ({ color }: Props) => {
  const classes = classnames(
    'rounded w-80 h-20 mx-auto mb-8 select-none border-solid border-2 border-slate-200 dark:border-slate-600 text-center text-4xl flex items-center justify-center shadowed text-white'
  )

  const styles = {
    backgroundColor: `#${color}`,
  }

  return (
    <div style={styles} className={classes}>
      #??????
    </div>
  )
}
