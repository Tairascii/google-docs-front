import { FaCaretDown } from 'react-icons/fa'
import styles from './RulerButton.module.scss'
import clsx from 'clsx'

interface RulerButtonProps {
  position: number
  isLeft: boolean
  isDragging: boolean
  onMouseDown: () => void
  onDoubleClick: () => void
}

const RulerButton = ({
  position,
  isDragging,
  isLeft,
  onDoubleClick,
  onMouseDown,
}: RulerButtonProps) => {
  return (
    <div
      className={styles.container}
      style={{ [isLeft ? 'left' : 'right']: `${position}px` }}
      onMouseDown={onMouseDown}
      onDoubleClick={onDoubleClick}
    >
      <FaCaretDown className={styles.icon} />
      <div
        className={clsx(styles.dragginLine, { [styles.visible]: isDragging })}
      />
    </div>
  )
}

export default RulerButton
