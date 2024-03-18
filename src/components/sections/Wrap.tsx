import React from "react";
import { Breed } from "@/types/Breed";
import { Lora } from "next/font/google";
import BreedCard from "@/components/widgets/BreedCard";

interface WrapProps {
  breeds: Breed[];
}

const lora = Lora({ subsets: ["latin"] });

const Wrap: React.FC<WrapProps> = ({ breeds }) => {
  return (
    <div className="py-12 md:py-16 bg-slate-100">
      <div className="container mx-auto">
        <div className="pb-12 text-center">
          <h2
            className={`${lora.className} text-3xl md:text-4xl font-medium mb-2`}
          >
            Discover the World of Cats
          </h2>
          <div className="text-slate-600 text-sm">
            Explore breeds, behaviors, and care tips.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {breeds &&
            breeds.map((breed) => <BreedCard key={breed.id} breed={breed} />)}
        </div>
      </div>
    </div>
  );
};

export default Wrap;
