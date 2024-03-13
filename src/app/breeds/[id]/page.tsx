"use client"
import {useEffect, useState} from "react"
import {usePathname} from "next/navigation"
import {fetchBreedDetails} from "../../../api/catApi" // Adjust the import path as necessary

import Header from "@/components/Header"
import BreedsImageSlider from "@/components/BreedsPage/BreedsImagesSlider"
import BreedsLayout from "@/components/BreedsPage/BreedsLayout"
import {Breed} from "@/types/Breed" // Adjust the import path as necessary

export default function BreedPage() {
  const pathname = usePathname()
  const id = pathname ? pathname.split("/").pop() : null
  const [breed, setBreed] = useState<Breed | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetchBreedDetails(id).then((breedDetails: Breed) => {
        setBreed(breedDetails)
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [id])

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
            <div className="py-12 overflow-hidden">
              <div className="pb-20">
                <BreedsImageSlider breedId={id} />
              </div>
              <BreedsLayout breed={breed} />
            </div>
          )}
        </div>
      </div>
    </span>
  )
}
