import React from "react";
import Image from "next/image";
import Search from "@/components/forms/Search";

interface TopBannerProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TopBanner: React.FC<TopBannerProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <div>
      <div className="bg-gray-800 py20 min-h-[7rem] relative">
        <Image
          src="/banner-cat-compressed.webp"
          fill={true}
          alt="Cats logo"
          className="object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-900 opacity-40"></div>
      </div>
      <div className="container bg-slate-100">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
    </div>
  );
};

export default TopBanner;
