"use client";
import { useEffect, useState } from "react";
import { fetchBreeds } from "@/api/catApi";
import Header from "@/components/sections/Header";
import TopBanner from "@/components/sections/TopBanner";
import Wrap from "@/components/sections/Wrap";
import { Breed } from "@/types/Breed";

export default function Main() {
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
      <TopBanner searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Wrap breeds={filteredBreeds} />
    </div>
  );
}
