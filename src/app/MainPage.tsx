"use client";
import { useEffect, useState } from "react";
import { fetchBreeds } from "../api/catApi";
import Header from "@/components/Header";
import Banner from "@/components/Banner";
import BreedsGrid from "@/components/BreedsGrid";
import { Breed } from "../types/Breed";

export default function MainPage() {
  const [breeds, setBreeds] = useState<Breed[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBreeds, setFilteredBreeds] = useState<Breed[]>([]);

  useEffect(() => {
    fetchBreeds().then((data: Breed[]) => {
      setBreeds(data);
      setFilteredBreeds(data);
    });
  }, []);

  useEffect(() => {
    const filteredData = breeds.filter((breed) =>
      breed.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBreeds(filteredData);
  }, [searchQuery, breeds]);

  return (
    <div>
      <Header />
      <Banner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BreedsGrid breeds={filteredBreeds} />
    </div>
  );
}
