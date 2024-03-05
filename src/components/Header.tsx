import React from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-100 py-4 ">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/link1">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>

          <Image
            src="/temporary-logo.svg"
            width={150}
            height={50}
            alt="Cats logo"
          />

          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/link1">Contacts</Link>
              </li>
              <li>
                <Link href="/link2">Github</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
