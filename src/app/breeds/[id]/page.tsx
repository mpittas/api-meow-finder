"use client";
// src/app/breeds/[id]/page.tsx
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchBreedDetails } from "../../../api/catApi"; // Adjust path as necessary
import Header from "@/components/Header";

interface Breed {
  name: string;
}

export default function BreedPage() {
  const pathname = usePathname();
  const id = pathname ? pathname.split("/").pop() : null;
  const [breed, setBreed] = useState<Breed | null>(null);

  useEffect(() => {
    if (id) {
      fetchBreedDetails(id).then((breedDetails: Breed) => {
        setBreed(breedDetails);
      });
    }
  }, [id]);

  return (
    <div>
      <Header />
      <div className="cat-details">
        {!id ? (
          <p>No breed ID provided.</p>
        ) : !breed ? (
          <p>Loading...</p>
        ) : (
          <>
            <h1 className="text-2xl font-bold">{breed?.name}</h1>
            <p>The current dynamic ID is: {id}</p>
          </>
        )}
      </div>
    </div>
  );
}
