export interface Breed {
  id: string
  image?: {url: string}
  name: string
  description: string
  temperament: string

  wikipedia_url: string
  vetstreet_url: string
  vcahospitals_url: string

  origin: string
  weight: {metric: string}
  life_span: string

  adaptability: number
  intelligence: number
  affection_level: number
  energy_level: number
  shedding_level: number
  child_friendly: number
  dog_friendly: number
  grooming: number
  health_issues: number
  social_needs: number
  stranger_friendly: number
  vocalisation: number
}
