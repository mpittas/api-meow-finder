import axios from "axios"

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_A0BKbeCLFrNWWkzAe58tLEh6h0oG5F7ocyXnCsAIHGJcZFN8q3cIGoKesfMb2Hhz",
  },
})

export const fetchBreeds = async () => {
  try {
    const response = await api.get("/breeds")
    return response.data
  } catch (error) {
    console.error("Failed to fetch breeds", error)
    return []
  }
}
