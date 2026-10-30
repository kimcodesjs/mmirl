import Countdown from './Countdown.tsx'
import './Greeting.css'

// 7:30 PM Saturday, October 31, in the guest's local time zone
const PARTY_START = new Date(2026, 9, 31, 19, 30)

function Greeting() {
  return (
    <main className="greeting">
      <div className="greeting-content">
        <h1>A mystery awaits&hellip;</h1>
        <button
          type="button"
          className="greeting-continue"
          aria-label="Continue"
          disabled
        >
          <span aria-hidden="true">&rsaquo;&rsaquo;</span>
        </button>
      </div>
      <Countdown target={PARTY_START} />
    </main>
  )
}

export default Greeting
