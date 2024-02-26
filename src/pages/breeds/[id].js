import {useRouter} from "next/router"
import {useEffect, useState} from "react"
import {fetchBreedDetails} from "../../services/catApi" // Ensure the path is correct

export default function BreedDetails() {
  const {id} = useRouter().query
  const [breed, setBreed] = useState(null)

  useEffect(() => {
    if (id) {
      console.log(`UseEffect triggered for ID: ${id}`)
      fetchBreedDetails(id).then((breedDetails) => {
        console.log("Breed details fetched:", breedDetails)
        setBreed(breedDetails)
      })
    }
  }, [id])

  // Loading and error handling
  if (!id) return <p>No breed ID provided.</p>
  if (!breed) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold">{breed.name}</h1>
      {/* You can add more breed details here if needed */}
    </div>
  )
}
