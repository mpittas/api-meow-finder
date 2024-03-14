import React from "react";
import BreedsContent from "./BreedsContent";
import BreedsFacts from "./BreedsFacts";
import { Breed } from "@/types/Breed";

type BreedsWrapProps = {
  breed: Breed | null;
};

const BreedsWrap: React.FC<BreedsWrapProps> = ({ breed }) => {
  return (
    <div className="container">
      {breed ? (
        <div className="grid grid-cols-3 gap-16">
          <div className="col-span-2">
            <BreedsContent breed={breed} />
          </div>
          <div className="bg-slate-200">
            <BreedsFacts />
          </div>
        </div>
      ) : (
        <p>No breed selected.</p>
      )}
    </div>
  );
};

export default BreedsWrap;
