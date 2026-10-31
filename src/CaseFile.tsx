import { VICTIM } from './people.ts'
import PersonCard from './PersonCard.tsx'
import SectionHeader from './SectionHeader.tsx'
import { useFadeOut } from './useFadeOut.ts'
import './CaseFile.css'

const CASE_DETAILS = [
  { label: 'Time of Death', value: 'Unknown' },
  { label: 'Cause of Death', value: 'Blunt Force Trauma' },
  { label: 'Found by', value: 'Best Man' },
]

type CaseFileProps = {
  onBack: () => void
}

function CaseFile({ onBack }: CaseFileProps) {
  const { fading, fadeOutThen } = useFadeOut()

  return (
    <div className={`screen${fading ? ' is-leaving' : ''}`}>
      <SectionHeader title="Case File" onBack={() => fadeOutThen(onBack)} />
      <PersonCard person={VICTIM} className="case-file-victim" />

      <dl className="case-details">
        {CASE_DETAILS.map(({ label, value }) => (
          <div className="case-detail" key={label}>
            <dt>{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default CaseFile
