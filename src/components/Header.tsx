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
            <ul className="flex space-x-6 text-xs uppercase font-medium">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
            </ul>
          </nav>

          <Link href="/">
            <Image
              src="/temporary-logo.svg"
              width={150}
              height={50}
              alt="Cats logo"
            />
          </Link>

          <nav>
            <ul className="flex space-x-6 text-xs uppercase font-medium">
              <li>
                <Link href="/">Contacts</Link>
              </li>
              <li>
                <Link href="/">Github</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
