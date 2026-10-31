import { useState } from 'react'
import type { Suspect } from './people.ts'
import './MemoryPhoto.css'

type MemoryPhotoProps = {
  suspect: Suspect
  unlocked: boolean
}

// Suspect photo that flips over to show their memory once it's unlocked
function MemoryPhoto({ suspect, unlocked }: MemoryPhotoProps) {
  const [flipped, setFlipped] = useState(false)
  const showBack = unlocked && flipped

  // The side facing the guest gives the button its accessible name
  return (
    <button
      type="button"
      className={`memory-photo${unlocked ? ' is-unlocked' : ''}${showBack ? ' is-flipped' : ''}`}
      disabled={!unlocked}
      aria-pressed={unlocked ? showBack : undefined}
      onClick={() => setFlipped((f) => !f)}
    >
      <span className="memory-photo-inner">
        <img
          className="memory-photo-face"
          src={suspect.photo}
          alt={
            unlocked
              ? `${suspect.name}. Tap to reveal memory`
              : `${suspect.name}. Memory locked`
          }
          aria-hidden={showBack}
          width={740}
          height={1024}
          loading="lazy"
        />
        <span
          className="memory-photo-face memory-photo-back"
          aria-hidden={!showBack}
        >
          {/* Only rendered once unlocked so the text can't be read early */}
          {unlocked && <>&ldquo;{suspect.memory}&rdquo;</>}
        </span>
      </span>
    </button>
  )
}

export default MemoryPhoto
