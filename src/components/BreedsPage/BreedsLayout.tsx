import React from "react"
import BreedContent from "./BreedContent"
import {Breed} from "../../types/Breed" // Adjust the import path as necessary

type BreedsLayoutProps = {
  breed: Breed | null
}

const BreedsLayout: React.FC<BreedsLayoutProps> = ({breed}) => {
  return (
    <div className="container">
      {breed ? (
        <div className="grid grid-cols-3 gap-12">
          <div className="bg-slate-200 h-[600px] col-span-2">
            <BreedContent breed={breed} />
          </div>
          <div className="bg-slate-200"></div>
        </div>
      ) : (
        <p>No breed selected.</p>
      )}
    </div>
  )
}

export default BreedsLayout
