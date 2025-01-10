'use client'

import { MinusIcon, PlusIcon } from 'lucide-react'
import styles from './FontSizeButton.module.scss'
import { useEffect, useState } from 'react'

interface FontSizeButtonProps {
  currentSize?: string
  onSizeChange: (val: string) => void
}

const FontSizeButton = ({
  onSizeChange,
  currentSize = '16px',
}: FontSizeButtonProps) => {
  const [inputVal, setInputVal] = useState(currentSize.replace('px', ''))

  useEffect(() => {
    setInputVal(currentSize.replace('px', ''))
  }, [currentSize])

  const onSizeDecrease = () => {
    const newSize = parseInt(currentSize) - 1
    onSizeChange(newSize.toString())
  }

  const onSizeIncrease = () => {
    const newSize = parseInt(currentSize) + 1
    onSizeChange(newSize.toString())
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      e.currentTarget.blur()
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={onSizeDecrease} className={styles.button}>
        <MinusIcon className={styles.buttonIcon} />
      </button>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        onBlur={() => onSizeChange(inputVal)}
        onKeyDown={onKeyDown}
        className={styles.input}
      />
      <button onClick={onSizeIncrease} className={styles.button}>
        <PlusIcon className={styles.buttonIcon} />
      </button>
    </div>
  )
}

export default FontSizeButton
