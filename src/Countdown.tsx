import { useNow } from './clock.ts'
import './Countdown.css'

type CountdownProps = {
  target: Date
}

function getRemaining(target: Date, nowMs: number) {
  const ms = Math.max(0, target.getTime() - nowMs)
  const totalSeconds = Math.floor(ms / 1000)
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  }
}

const pad = (n: number) => String(n).padStart(2, '0')

function Countdown({ target }: CountdownProps) {
  const remaining = getRemaining(target, useNow())

  const units = [
    { value: remaining.days, label: 'days' },
    { value: remaining.hours, label: 'hrs' },
    { value: remaining.minutes, label: 'min' },
    { value: remaining.seconds, label: 'sec' },
  ]

  return (
    <div className="countdown" role="timer">
      {units.map(({ value, label }) => (
        <div className="countdown-unit" key={label}>
          <span className="countdown-value">{pad(value)}</span>
          <span className="countdown-label">{label}</span>
        </div>
      ))}
    </div>
  )
}

export default Countdown
