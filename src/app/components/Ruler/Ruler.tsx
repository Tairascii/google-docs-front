import { RulerButton } from '@/app/ui/RulerButton'
import styles from './Ruler.module.scss'
import { useRef, useState } from 'react'

const markers = Array.from({ length: 83 }, (_, i) => i)
const DOC_WIDTH = 816
const MIN_SPACE = 100
const INIT_MARGIN = 56
const Ruler = () => {
  const [leftMargin, setLeftMargin] = useState(INIT_MARGIN)
  const [rightMargin, setRightMargin] = useState(INIT_MARGIN)

  const [isDraggingLeft, setIsDraggingLeft] = useState(false)
  const [isDraggingRight, setIsDraggingRight] = useState(false)

  const rulerRef = useRef<HTMLDivElement>(null)
  const handleLeftMouseDown = () => {
    setIsDraggingLeft(true)
  }

  const handleRightMouseDown = () => {
    setIsDraggingRight(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if ((!isDraggingLeft && !isDraggingRight) || !rulerRef.current) return
    const container = rulerRef.current?.querySelector('#ruler-container')
    if (!container) return
    const containerRect = container.getBoundingClientRect()
    const relativeX = e.clientX - containerRect.left
    const rawPosition = Math.max(0, Math.min(DOC_WIDTH, relativeX))
    if (isDraggingLeft) {
      const maxLeftPositon = DOC_WIDTH - rightMargin - MIN_SPACE
      const nextLeftPositon = Math.min(rawPosition, maxLeftPositon)
      setLeftMargin(nextLeftPositon)
    } else {
      const maxRightPositon = DOC_WIDTH - leftMargin - MIN_SPACE
      const newRightPositon = Math.max(DOC_WIDTH - rawPosition, 0)
      const nextRightPositon = Math.min(newRightPositon, maxRightPositon)
      setRightMargin(nextRightPositon)
    }
  }

  const handleMouseUp = () => {
    setIsDraggingLeft(false)
    setIsDraggingRight(false)
  }

  const handleLeftDoubleClick = () => {
    setLeftMargin(56)
  }

  const handleRightDoubleClick = () => {
    setRightMargin(56)
  }

  return (
    <div
      className={styles.wrapper}
      ref={rulerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div id="ruler-container" className={styles.container}>
        <RulerButton
          position={leftMargin}
          isLeft={true}
          isDragging={isDraggingLeft}
          onMouseDown={handleLeftMouseDown}
          onDoubleClick={handleLeftDoubleClick}
        />
        <RulerButton
          position={rightMargin}
          isLeft={false}
          isDragging={isDraggingRight}
          onMouseDown={handleRightMouseDown}
          onDoubleClick={handleRightDoubleClick}
        />
        <div className={styles.markerWrapper}>
          <div className={styles.markerContainer}>
            {markers.map((item) => {
              const position = (item * DOC_WIDTH) / 82
              return (
                <div
                  key={item}
                  className={styles.marker}
                  style={{ left: `${position}px` }}
                >
                  {item % 10 === 0 && (
                    <>
                      <div className={styles.markerTen} />
                      <span className={styles.markerText}>{item / 10 + 1}</span>
                    </>
                  )}
                  {item % 5 === 0 && item % 10 !== 0 && (
                    <div className={styles.markerFive} />
                  )}
                  {item % 5 !== 0 && item % 10 !== 0 && (
                    <div className={styles.markerOther} />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ruler
