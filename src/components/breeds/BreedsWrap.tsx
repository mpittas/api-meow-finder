import React from "react"
import BreedsContent from "./BreedsContent"
import BreedsFacts from "./BreedsFacts"
import {Breed} from "@/types/Breed"

type BreedsWrapProps = {
  breed: Breed | null
}

const BreedsWrap: React.FC<BreedsWrapProps> = ({breed}) => {
  return (
    <div className="container mx-auto">
      {breed ? (
        <div className="px-[25rem]">
          <div className="">
            <BreedsContent breed={breed} />
          </div>
        </div>
      ) : (
        <p>No breed selected.</p>
      )}
    </div>
  )
}

export default BreedsWrap
