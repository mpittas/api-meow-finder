"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
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
                <div className="bg-white border rounded-lg shadow cursor-pointer overflow-hidden ">
                  <div className="h-[12rem] relative">
                    <Image
                      src={
                        breed.image
                          ? breed.image.url
                          : "/path-to-default-image.jpg"
                      }
                      alt={breed.name}
                      loading="lazy"
                      fill={true}
                      className="object-cover rounded-[0.5rem 0.5rem 0 0]"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="text-lg font-bold">{breed.name}</h4>
                    <p className="text-sm text-slate-400">{breed.origin}</p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BreedsGrid;
