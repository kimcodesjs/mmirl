import bride from './assets/photos/bertha-barber-BM.jpg'
import groom from './assets/photos/herbert-b-f-GR.jpg'
import maidOfHonor from './assets/photos/mrs-tm-heffner-MOH.jpg'
import bestMan from './assets/photos/geo-b-miles-GR.jpg'
import bridesmaid from './assets/photos/mrs-flag-BR.jpg'
import officiant from './assets/photos/rev-holly-PAST.jpg'
import victim from './assets/photos/c-m-bell-GR.jpg'
import detectives from './assets/photos/springle-j-f-DET.jpg'
import familyDog from './assets/photos/marmion.jpg'
import groomsMother from './assets/photos/mrs-eb-lewis.jpg'
import bridesParents from './assets/photos/mrs-t-f-wright.jpg'
import bridesNiece from './assets/photos/m-brown.jpg'
import { partyTime } from './clock.ts'

export type Person = {
  name: string
  role?: string
  photo: string
}

export type Suspect = Person & {
  memory: string
  memoryUnlocksAt: Date
}

// Shown in this order on the Suspects screen
export const SUSPECTS: Suspect[] = [
  {
    name: 'Mrs. Herbert',
    role: 'Bride',
    photo: bride,
    memory: 'I received a letter from the victim the night before the wedding.',
    memoryUnlocksAt: partyTime(19, 30),
  },
  {
    name: 'Mr. Herbert',
    role: 'Groom',
    photo: groom,
    memory:
      'Bell asked me to meet him in the basement for a drink before the ceremony, but he was nowhere to be found.',
    memoryUnlocksAt: partyTime(19, 45),
  },
  {
    name: 'Rev. Holly',
    role: 'Officiant',
    photo: officiant,
    memory:
      'A man came to confessional just days ago. Seemingly at the edge of madness, he was considering committing a terrible act.',
    memoryUnlocksAt: partyTime(20, 0),
  },
  {
    name: 'Mrs. Hefner',
    role: 'Maid of Honor',
    photo: maidOfHonor,
    memory:
      'The morning of the wedding, I saw Bell arguing with Miles. They were in quite the uproar.',
    memoryUnlocksAt: partyTime(20, 15),
  },
  {
    name: 'Geo Miles',
    role: 'Best Man',
    photo: bestMan,
    memory:
      'Yes… Bell and I fought. He planned to interrupt the ceremony. He wanted the Bride for himself. I simply would not allow it. I warned him it would come to blows.',
    memoryUnlocksAt: partyTime(20, 30),
  },
  {
    name: 'Mrs. Flag',
    role: 'Bridesmaid',
    photo: bridesmaid,
    memory:
      'Just moments before the ceremony, I found Mrs. Hefner quite disheveled. She was working to restore her visage with haste, rinsing her hands and arms.',
    memoryUnlocksAt: partyTime(20, 45),
  },
]

// Shown on the Case File screen
export const VICTIM: Person = {
  name: 'C. M. Bell',
  role: 'Found Deceased',
  photo: victim,
}

// Shown on the Others screen; these have a label only, no separate role
export const DETECTIVES: Person[] = [
  { name: 'Names Unknown', photo: detectives },
]

export const OTHER_GUESTS: Person[] = [
  { name: "Groom's Family Dog", photo: familyDog },
  { name: "Groom's Mother", photo: groomsMother },
  { name: "Bride's Parents", photo: bridesParents },
  { name: "Bride's Niece", photo: bridesNiece },
]
