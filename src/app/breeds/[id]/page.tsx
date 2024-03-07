"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchBreedDetails } from "../../../api/catApi"; // Adjust the import path as necessary
import Header from "@/components/Header";
import ImageCarousel from "@/components/ImageCarousel";

interface Breed {
  name: string;
}

export default function BreedPage() {
  const pathname = usePathname();
  const id = pathname ? pathname.split("/").pop() : null;
  const [breed, setBreed] = useState<Breed | null>(null);
  const [isLoading, setIsLoading] = useState(true); // New loading state

  useEffect(() => {
    if (id) {
      fetchBreedDetails(id).then((breedDetails: Breed) => {
        setBreed(breedDetails);
        setIsLoading(false); // Update loading state once data is fetched
      });
    } else {
      setIsLoading(false); // Ensure loading state is updated even if no ID
    }
  }, [id]);

  return (
    <div>
      <Header />
      <div className="cat-details">
        {isLoading ? (
          <p>Loading...</p> // Placeholder content
        ) : !id || !breed ? (
          <p>No breed ID provided or breed not found.</p>
        ) : (
          <div className="py-12">
            <div className="container">
              <ImageCarousel breedId={id} />
              <h1 className="text-2xl font-bold">{breed.name}</h1>
              <p>The current dynamic ID is: {id}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
