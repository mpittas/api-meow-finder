"use client"
import {useEffect, useState} from "react"
import {fetchBreeds} from "../services/catApi"
import Search from "../components/Search"
import Link from "next/link"

export default function MainPage() {
  const [breeds, setBreeds] = useState([])
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredBreeds, setFilteredBreeds] = useState([])

  useEffect(() => {
    fetchBreeds().then((data) => {
      setBreeds(data)
      setFilteredBreeds(data) // Initialize filteredBreeds with all breeds
    })
  }, [])

  useEffect(() => {
    const filteredData = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredBreeds(filteredData)
  }, [searchQuery, breeds])

  return (
    <div className="p-12">
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredBreeds.map((breed) => (
          <Link key={breed.id} href={`/breeds/${breed.id}`} passHref>
            <div
              key={breed.id}
              className="bg-white border p-4 rounded-lg shadow"
            >
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
  )
}
