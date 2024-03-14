"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { fetchBreedDetails } from "../../../api/catApi";

import Header from "@/components/sections/Header";
import BreedsImage from "@/components/breeds/BreedsImages";
import BreedsWrap from "@/components/breeds/BreedsWrap";
import { Breed } from "@/types/Breed";

export default function BreedPage() {
  const pathname = usePathname();
  const id = pathname ? pathname.split("/").pop() : null;
  const [breed, setBreed] = useState<Breed | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      fetchBreedDetails(id).then((breedDetails: Breed) => {
        setBreed(breedDetails);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, [id]);

  return (
    <span>
      <div className="bg-slate-100">
        <Header />

        <div className="cat-details">
          {isLoading ? (
            <p>Loading...</p>
          ) : !id || !breed ? (
            <p>No breed ID provided or breed not found.</p>
          ) : (
            <div className="overflow-hidden">
              <div className="pb-20">
                <BreedsImage breedId={id} />
              </div>
              <BreedsWrap breed={breed} />
            </div>
          )}
        </div>
      </div>
    </span>
  );
}
