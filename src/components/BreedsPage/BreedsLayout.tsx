import React from "react"
import BreedContent from "./BreedContent"
import BreedsFacts from "./BreedsFacts"
import {Breed} from "../../types/Breed" // Adjust the import path as necessary

type BreedsLayoutProps = {
  breed: Breed | null
}

const BreedsLayout: React.FC<BreedsLayoutProps> = ({breed}) => {
  return (
    <div className="container">
      {breed ? (
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-2">
            <BreedContent breed={breed} />
          </div>
          <div className="bg-slate-200">
            <BreedsFacts />
          </div>
        </div>
      ) : (
        <p>No breed selected.</p>
      )}
    </div>
  )
}

export default BreedsLayout
