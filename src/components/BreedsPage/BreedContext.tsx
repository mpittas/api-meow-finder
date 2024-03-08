import React from "react";

type BreedContextType = {
  breedName: string | null;
  id: string | null;
  setBreedName: React.Dispatch<React.SetStateAction<string | null>>;
  setId: React.Dispatch<React.SetStateAction<string | null>>;
};

export const BreedContext = React.createContext<BreedContextType | undefined>(
  undefined
);
