import { formatTime, useNow } from './clock.ts'
import MemoryPhoto from './MemoryPhoto.tsx'
import { SUSPECTS } from './people.ts'
import PersonCard from './PersonCard.tsx'
import SectionHeader from './SectionHeader.tsx'
import { useFadeOut } from './useFadeOut.ts'
import './Suspects.css'

type SuspectsProps = {
  onBack: () => void
}

function Suspects({ onBack }: SuspectsProps) {
  const { fading, fadeOutThen } = useFadeOut()
  const nowMs = useNow()

  return (
    <div className={`screen${fading ? ' is-leaving' : ''}`}>
      <SectionHeader title="Suspects" onBack={() => fadeOutThen(onBack)} />

      <ul className="person-grid">
        {SUSPECTS.map((suspect) => {
          const unlocked = nowMs >= suspect.memoryUnlocksAt.getTime()
          return (
            <li key={suspect.name}>
              <PersonCard
                person={suspect}
                photo={<MemoryPhoto suspect={suspect} unlocked={unlocked} />}
              >
                <p
                  className={`memory-status${unlocked ? ' is-unlocked' : ''}`}
                >
                  {unlocked
                    ? 'Memory unlocked — tap photo'
                    : `Memory unlocks at ${formatTime(suspect.memoryUnlocksAt)}`}
                </p>
              </PersonCard>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Suspects
