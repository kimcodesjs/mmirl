import { useState } from 'react'
import CaseFile from './CaseFile.tsx'
import Clues from './Clues.tsx'
import GameMenu, { type MenuOption } from './GameMenu.tsx'
import Greeting from './Greeting.tsx'
import Intro from './Intro.tsx'
import Others from './Others.tsx'
import Suspects from './Suspects.tsx'
import './App.css'

type Screen = 'greeting' | 'intro' | 'menu' | MenuOption

function App() {
  const [screen, setScreen] = useState<Screen>('greeting')
  const backToMenu = () => setScreen('menu')

  return (
    <main className="stage">
      {screen === 'greeting' && (
        <Greeting onContinue={() => setScreen('intro')} />
      )}
      {screen === 'intro' && <Intro onEnter={backToMenu} />}
      {screen === 'menu' && <GameMenu onSelect={setScreen} />}
      {screen === 'casefile' && <CaseFile onBack={backToMenu} />}
      {screen === 'suspects' && <Suspects onBack={backToMenu} />}
      {screen === 'clues' && <Clues onBack={backToMenu} />}
      {screen === 'others' && <Others onBack={backToMenu} />}
    </main>
  )
}

export default App
