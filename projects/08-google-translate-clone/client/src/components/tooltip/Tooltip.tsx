import { useState } from 'react'
import './tooltip.css'

interface Props {
  text: string
  children: React.ReactNode
  delay?: number
  position?: string
}

const Tooltip = ({ text, children, delay, position = 'bottom' }: Props) => {
  const [active, setActive] = useState(false)
  let timeout: number

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay ?? 300)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <div
      className='tooltip-wrapper'
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={`tooltip-text ${position}`}>
          {text}
        </div>
      )}
    </div>
  )
}

export default Tooltip
