"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchBreedDetails } from "../../../api/catApi"; // Adjust the import path as necessary
import Header from "@/components/Header";
import BreedsImageSlider from "@/components/BreedsPage/BreedsImagesSlider";
import BreedContent from "@/components/BreedsPage/BreedContent";
import BreedsLayout from "@/components/BreedsPage/BreedsLayout";

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
    <span>
      <div className="bg-slate-100">
        <Header />

        <div className="cat-details">
          {isLoading ? (
            <p>Loading...</p> // Placeholder content
          ) : !id || !breed ? (
            <p>No breed ID provided or breed not found.</p>
          ) : (
            <div className="py-12 overflow-hidden">
              <div className="pb-20">
                <BreedsImageSlider breedId={id} />
              </div>
              <BreedsLayout
                breedName={breed ? breed.name : ""}
                id={id || null}
              />
            </div>
          )}
        </div>
      </div>
    </span>
  );
}
