import { useState } from 'react'
import { useFadeOut } from './useFadeOut.ts'
import './Intro.css'

const STORY = [
  'The year is 1826. Loved ones have gathered at 367 Mohawk Ave to wed sweet Ms. Barber to the distinguished Mr. Herbert.',
  "The atmosphere is joyous - true love in the air as the ceremony concludes. Joyous indeed - that is, until Mr. Bell is discovered deceased in the basement of the newly weds' home.",
  "While the obvious may be assumed, that the murderer is amongst those present, detectives at the time were unsuccessful in their attempts to facilitate justice. The culprit was never identified.",
  'Tonight, while the veil between life and death is at its thinnest, we call upon the spirits of those with most intimate knowledge of this crime. May this murder yet be solved?',
]

type IntroProps = {
  onEnter: () => void
}

function Intro({ onEnter }: IntroProps) {
  const [page, setPage] = useState(0)
  const text = useFadeOut()
  const screen = useFadeOut()
  const isLast = page === STORY.length - 1

  const goTo = (next: number) => {
    if (next < 0 || next >= STORY.length) return
    text.fadeOutThen(() => {
      setPage(next)
      text.setFading(false)
    })
  }

  return (
    <div className={`screen${screen.fading ? ' is-leaving' : ''}`}>
      {/* Tapping anywhere on the story moves forward; the arrows below can also go back */}
      <div className="intro-story" onClick={() => !isLast && goTo(page + 1)}>
        <p
          className={`intro-text${text.fading ? ' is-hidden' : ''}`}
          aria-live="polite"
        >
          {STORY[page]}
        </p>
      </div>

      <nav className="intro-nav" aria-label="Story">
        <button
          type="button"
          className="glow-button glow-button-arrow"
          aria-label="Previous"
          disabled={page === 0}
          onClick={() => goTo(page - 1)}
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        {isLast ? (
          <button
            type="button"
            className="glow-button glow-button-arrow"
            aria-label="Enter"
            onClick={() => screen.fadeOutThen(onEnter)}
          >
            <span aria-hidden="true">&rsaquo;&rsaquo;</span>
          </button>
        ) : (
          <>
            <span className="intro-progress">
              {page + 1} / {STORY.length}
            </span>
            <button
              type="button"
              className="glow-button glow-button-arrow"
              aria-label="Next"
              onClick={() => goTo(page + 1)}
            >
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </>
        )}
      </nav>
    </div>
  )
}

export default Intro
