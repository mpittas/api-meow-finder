import React, { useState, ReactNode } from "react";
import { BreedContext } from "./BreedContext";

type BreedProviderProps = {
  children: ReactNode;
};

export const BreedProvider: React.FC<BreedProviderProps> = ({ children }) => {
  const [breedName, setBreedName] = useState<string | null>(null);
  const [id, setId] = useState<string | null>(null);

  return (
    <BreedContext.Provider value={{ breedName, id, setBreedName, setId }}>
      {children}
    </BreedContext.Provider>
  );
};
