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

  if (!id) return <p>No breed ID provided.</p>;
  if (!breed) return <p>Loading...</p>;

  return (
    <div>
      <Header />
      <div className="cat-details">
        <h1 className="text-2xl font-bold">{breed?.name}</h1>
        <p>The current dynamic ID is: {id}</p>
      </div>
    </div>
  );
}
