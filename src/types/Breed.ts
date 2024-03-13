export interface ExternalLink {
  type: string
  url: string
}

export interface Breed {
  external_links?: ExternalLink[]
  image?: {url: string}
  vetstreet_url: string
  vcahospitals_url: string
  id: string
  name: string
  description: string
  temperament: string
  origin: string
  life_span: string
  adaptability: number
  affection_level: number
  child_friendly: number
  grooming: number
  intelligence: number
  health_issues: number
  social_needs: number
  stranger_friendly: number
}
