import { PARTY_START } from './clock.ts'
import Countdown from './Countdown.tsx'
import { useFadeOut } from './useFadeOut.ts'
import './Greeting.css'

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
