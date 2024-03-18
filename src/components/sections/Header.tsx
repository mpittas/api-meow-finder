import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center gap-x-2">
          <div>
            <nav>
              <ul className="flex space-x-6 text-xs uppercase font-medium">
                <li className="hidden md:inline-block">
                  <Link href="/">Home</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="order-[-1] md:order-[0] ">
            <Link href="/">
              <Image
                src="/temporary-logo.svg"
                width={150}
                height={50}
                alt="Cats logo"
                className="w-[120px] md:w-[150px] h-auto"
                priority={true}
              />
            </Link>
          </div>

          <div>
            <nav>
              <ul className="flex space-x-4 md:space-x-6 text-xs uppercase font-medium">
                <li className="inline-block md:hidden">
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/mpittas/cats-info"
                    target="_blank"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link href="https://mariospittas.com/" target="_blank">
                    Portfolio
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
