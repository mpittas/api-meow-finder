"use client";
import React from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="mt-[-2rem] z-1 relative">
      <div className="w-[520px] mx-auto flex items-center justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search for breeds..."
          className="p-4 border rounded-lg w-full shadow-lg shadow-slate-600/5"
        />
      </div>
    </div>
  );
};

export default Search;
