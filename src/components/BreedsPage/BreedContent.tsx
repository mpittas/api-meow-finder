import React from "react"
import Link from "next/link"
import {Lora} from "next/font/google"
import {Breed} from "../../types/Breed"
import LinkIcon from "../LinkIcon"

const lora = Lora({subsets: ["latin"]})

type BreedContentProps = {
  breed: Breed
}

const BreedContent: React.FC<BreedContentProps> = ({breed}) => {
  return (
    <div className="breed-cnt">
      <div className="pb-8">
        <h1 className={`${lora.className} text-6xl pb-3`}>{breed.name}</h1>
        <div className="text-md text-gray-700">{breed.description}</div>
      </div>

      <div className="flex gap-x-2 pb-8">
        <LinkIcon href={breed.vetstreet_url} text="Vetstreet" />
        <LinkIcon href={breed.vcahospitals_url} text="VCA Hospitals" />
      </div>

      <p>Temperament: {breed.temperament}</p>
      <p>Origin: {breed.origin}</p>
      <p>Life Span: {breed.life_span} years</p>
      <p>Affection Level: {breed.affection_level}</p>
      <p>Adaptability: {breed.adaptability}</p>
      <p>Child Friendly: {breed.child_friendly}</p>
      <p>Grooming: {breed.grooming}</p>
      <p>Intelligence: {breed.intelligence}</p>
      <p>Health Issues: {breed.health_issues}</p>
      <p>Social Needs: {breed.social_needs}</p>
      <p>Stranger Friendly: {breed.stranger_friendly}</p>
    </div>
  )
}

export default BreedContent
