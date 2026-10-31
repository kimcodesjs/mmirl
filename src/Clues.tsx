import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader.tsx'
import { useFadeOut } from './useFadeOut.ts'
import './Clues.css'

// Numbered in this order; the number is what guests look for at the party
const CLUES = ['Love Letter', 'Bloody Hammer', 'Vial of Poison', 'Bloody Earring']

const STORAGE_KEY = 'found-clues'

// Remembered per phone so found clues survive leaving the page or refreshing
function loadFound(): number[] {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
    return Array.isArray(saved) ? saved : []
  } catch {
    return []
  }
}

type CluesProps = {
  onBack: () => void
}

function Clues({ onBack }: CluesProps) {
  const { fading, fadeOutThen } = useFadeOut()
  const [found, setFound] = useState<number[]>(loadFound)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(found))
    } catch {
      // Storage unavailable (e.g. private browsing); found clues just won't persist
    }
  }, [found])

  const toggle = (index: number) =>
    setFound((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )

  return (
    <div className={`screen${fading ? ' is-leaving' : ''}`}>
      <SectionHeader title="Clues" onBack={() => fadeOutThen(onBack)} />
      <p className="clues-intro">
        The clues will be numbered; tap below to mark them as found.
      </p>

      <ol className="clues">
        {CLUES.map((clue, index) => {
          const isFound = found.includes(index)
          return (
            <li key={clue}>
              <button
                type="button"
                className="glow-button clue"
                aria-pressed={isFound}
                onClick={() => toggle(index)}
              >
                <span className="clue-number">{index + 1}.</span>
                {/* Keyed so the text fades in fresh each time it changes */}
                <span className="clue-text" key={String(isFound)}>
                  {isFound ? clue : 'Tap to reveal'}
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default Clues
