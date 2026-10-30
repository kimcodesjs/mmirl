import { useState } from 'react'
import GameMenu from './GameMenu.tsx'
import Greeting from './Greeting.tsx'
import Intro from './Intro.tsx'
import './App.css'

type Screen = 'greeting' | 'intro' | 'menu'

function App() {
  const [screen, setScreen] = useState<Screen>('greeting')

  return (
    <main className="stage">
      {screen === 'greeting' && (
        <Greeting onContinue={() => setScreen('intro')} />
      )}
      {screen === 'intro' && <Intro onEnter={() => setScreen('menu')} />}
      {screen === 'menu' && <GameMenu />}
    </main>
  )
}

export default App
