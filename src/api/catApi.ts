import axios from "axios";

const api = axios.create({
  baseURL: "https://api.thecatapi.com/v1",
  headers: {
    "x-api-key":
      "live_A0BKbeCLFrNWWkzAe58tLEh6h0oG5F7ocyXnCsAIHGJcZFN8q3cIGoKesfMb2Hhz",
  },
});

export const fetchBreeds = async () => {
  try {
    const response = await api.get("/breeds");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch breeds", error);
    return [];
  }
};

export const fetchBreedDetails = async (breedId: string) => {
  console.log(`Fetching details for breed ID: ${breedId}`);
  try {
    const response = await api.get(`/breeds/${breedId}`);
    console.log("Breed details response:", response.data);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch details for breed ${breedId}`, error);
    return null;
  }
};

export const fetchImages = async (
  breedId: string | null,
  limit: number = 5
): Promise<any[]> => {
  try {
    let url = `/images/search?limit=${limit}`;
    if (breedId) {
      url += `&breed_id=${breedId}`;
    }
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch images", error);
    return [];
  }
};
