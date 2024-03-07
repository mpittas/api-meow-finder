import React from "react";
import { Lora } from "next/font/google";

const lora = Lora({ subsets: ["latin"] });

type BreedContentProps = {
  breedName: string;
  id: string | null;
};

const BreedContent: React.FC<BreedContentProps> = ({ breedName, id }) => {
  return (
    <div className="breed-cnt">
      <h1 className={`${lora.className} text-6xl`}>{breedName}</h1>
      <p className="text-lg text-gray-600"></p>
    </div>
  );
};

export default BreedContent;
