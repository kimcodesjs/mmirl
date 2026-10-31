type SectionHeaderProps = {
  title: string
  onBack: () => void
  /** Thin rule under the title; turn off when a labelled divider follows right away */
  divider?: boolean
}

// Back arrow plus title, shared by the screens the game menu opens
function SectionHeader({ title, onBack, divider = true }: SectionHeaderProps) {
  return (
    <>
      <header className="section-header">
        <button
          type="button"
          className="glow-button glow-button-arrow"
          aria-label="Back to menu"
          onClick={onBack}
        >
          <span aria-hidden="true">&lsaquo;</span>
        </button>
        <h1>{title}</h1>
      </header>
      {divider && <hr className="section-divider" />}
    </>
  )
}

export default SectionHeader
