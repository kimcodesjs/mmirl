import { useEffect, useState } from 'react'

/** A time on party night (Saturday, October 31) in the guest's local time zone. */
export function partyTime(hours: number, minutes: number) {
  return new Date(2026, 9, 31, hours, minutes)
}

export const PARTY_START = partyTime(19, 30)

// Dev only: preview the night by adding ?time=20:15 to the URL; the clock then runs from that time
const devOffset = (() => {
  if (!import.meta.env.DEV) return 0
  const match = new URLSearchParams(window.location.search)
    .get('time')
    ?.match(/^(\d{1,2}):(\d{2})$/)
  if (!match) return 0
  return partyTime(Number(match[1]), Number(match[2])).getTime() - Date.now()
})()

export const now = () => Date.now() + devOffset

/** Current time in ms, re-rendering every second. */
export function useNow() {
  const [time, setTime] = useState(now)

  useEffect(() => {
    const id = setInterval(() => setTime(now()), 1000)
    return () => clearInterval(id)
  }, [])

  return time
}

export const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
