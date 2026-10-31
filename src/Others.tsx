import { DETECTIVES, OTHER_GUESTS } from './people.ts'
import PersonCard from './PersonCard.tsx'
import SectionHeader from './SectionHeader.tsx'
import { useFadeOut } from './useFadeOut.ts'
import './Others.css'

const GROUPS = [
  { heading: 'Detectives', people: DETECTIVES },
  { heading: 'Other Guests', people: OTHER_GUESTS },
]

type OthersProps = {
  onBack: () => void
}

function Others({ onBack }: OthersProps) {
  const { fading, fadeOutThen } = useFadeOut()

  return (
    <div className={`screen${fading ? ' is-leaving' : ''}`}>
      <SectionHeader
        title="Others"
        onBack={() => fadeOutThen(onBack)}
        divider={false}
      />

      {GROUPS.map(({ heading, people }) => (
        <section className="others-group" key={heading}>
          <h2 className="others-heading">{heading}</h2>
          <ul className="person-grid">
            {people.map((person) => (
              <li key={person.name}>
                <PersonCard person={person} nameAs="h3" />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

export default Others
