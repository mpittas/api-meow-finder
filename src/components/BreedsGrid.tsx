"use client";

import React from "react";
import Link from "next/link";
import { Breed } from "../types/Breed";

interface BreedsGridProps {
  breeds: Breed[];
}

const BreedsGrid: React.FC<BreedsGridProps> = ({ breeds }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {breeds &&
            breeds.map((breed) => (
              <Link key={breed.id} href={`/breeds/${breed.id}`} passHref>
                <div className="bg-white border p-4 rounded-lg shadow cursor-pointer">
                  <img
                    src={breed.image ? breed.image.url : undefined}
                    alt={breed.name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="text-lg font-bold">{breed.name}</h3>
                  <p>{breed.origin}</p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BreedsGrid;
