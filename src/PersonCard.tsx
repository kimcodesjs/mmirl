import type { ReactNode } from 'react'
import type { Person } from './people.ts'
import './PersonCard.css'

type PersonCardProps = {
  person: Person
  className?: string
  /** Replaces the plain photo, e.g. with a flippable one */
  photo?: ReactNode
  /** Heading level for the name; use h3 when the card sits under an h2 */
  nameAs?: 'h2' | 'h3'
  /** Extra lines under the role */
  children?: ReactNode
}

// Photo with a glowing name and smaller role beneath
function PersonCard({
  person,
  className = '',
  photo,
  nameAs: Name = 'h2',
  children,
}: PersonCardProps) {
  const { name, role } = person

  return (
    <div className={`person ${className}`}>
      {photo ?? (
        <img
          className="person-photo"
          src={person.photo}
          alt={name}
          width={740}
          height={1024}
          loading="lazy"
        />
      )}
      <Name className="person-name">{name}</Name>
      {role && <p className="person-role">{role}</p>}
      {children}
    </div>
  )
}

export default PersonCard
