import { useCallback, useEffect, useRef, useState } from 'react'

// Keep in sync with --fade in index.css
export const FADE_MS = 600

/** Fades something out, then runs a callback once it's invisible. Repeat calls mid-fade are ignored. */
export function useFadeOut() {
  const [fading, setFading] = useState(false)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const fadeOutThen = useCallback((done: () => void) => {
    if (timer.current !== undefined) return
    setFading(true)
    timer.current = window.setTimeout(() => {
      timer.current = undefined
      done()
    }, FADE_MS)
  }, [])

  return { fading, setFading, fadeOutThen }
}
