import React from "react"
import Link from "next/link"
import Image from "next/image"
import {Breed} from "@/types/Breed"
import BadgeRounded from "./BadgeRounded"
import {truncateChars} from "@/utils/truncate"

interface BreedCardProps {
  breed: Breed
}

const BreedCard: React.FC<BreedCardProps> = ({breed}) => {
  return (
    <Link
      className="def-card"
      key={breed.id}
      href={`/breeds/${breed.id}`}
      passHref
    >
      <div className="bg-white border rounded-lg shadow cursor-pointer overflow-hidden ">
        <div className="h-[12rem] relative">
          <Image
            sizes="(max-width: 100%) 100$, (max-width: 1200px) 50vw, 33vw"
            src={breed.image ? breed.image.url : "/cat-placeholder.png"}
            alt={breed.name}
            loading="lazy"
            fill={true}
            className="object-cover rounded-[0.5rem 0.5rem 0 0]"
          />
        </div>

        <div className="p-4">
          <h4 className="text-lg font-bold">{breed.name}</h4>
          <div className="text-sm text-slate-600 mb-4">
            {truncateChars(breed.description, 65)}
          </div>
          <div className="flex">
            <BadgeRounded text={breed.origin} />
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BreedCard
