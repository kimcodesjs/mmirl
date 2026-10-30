import Countdown from './Countdown.tsx'
import { useFadeOut } from './useFadeOut.ts'
import './Greeting.css'

// 7:30 PM Saturday, October 31, in the guest's local time zone
const PARTY_START = new Date(2026, 9, 31, 19, 30)

type GreetingProps = {
  onContinue: () => void
}

function Greeting({ onContinue }: GreetingProps) {
  const { fading, fadeOutThen } = useFadeOut()

  return (
    <div className={`screen${fading ? ' is-leaving' : ''}`}>
      <div className="greeting-content">
        <h1>A mystery awaits&hellip;</h1>
        <button
          type="button"
          className="glow-button glow-button-arrow greeting-continue"
          aria-label="Continue"
          onClick={() => fadeOutThen(onContinue)}
        >
          <span aria-hidden="true">&rsaquo;&rsaquo;</span>
        </button>
      </div>
      <Countdown target={PARTY_START} />
    </div>
  )
}

export default Greeting
