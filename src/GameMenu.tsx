import { useFadeOut } from './useFadeOut.ts'
import './GameMenu.css'

export type MenuOption = 'casefile' | 'suspects' | 'clues' | 'others'

const OPTIONS: { id: MenuOption; label: string }[] = [
  { id: 'casefile', label: 'Case File' },
  { id: 'suspects', label: 'Suspects' },
  { id: 'clues', label: 'Clues' },
  { id: 'others', label: 'Others' },
]

type GameMenuProps = {
  onSelect: (option: MenuOption) => void
}

function GameMenu({ onSelect }: GameMenuProps) {
  const { fading, fadeOutThen } = useFadeOut()

  return (
    <div className={`screen game-menu${fading ? ' is-leaving' : ''}`}>
      <h1>Murder Mystery</h1>
      <hr className="section-divider" />
      <nav className="game-menu-options" aria-label="Game menu">
        {OPTIONS.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            className="glow-button glow-button-text"
            onClick={() => fadeOutThen(() => onSelect(id))}
          >
            {label}
          </button>
        ))}
      </nav>
    </div>
  )
}

export default GameMenu
