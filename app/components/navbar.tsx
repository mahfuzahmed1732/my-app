"use client";

import Link from "next/link";
import { useState } from "react";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import { MdLogin, MdMenu } from "react-icons/md";

const Navbar = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 px-3 md:px-8 py-3 w-full">

      <div className="flex justify-between items-center">

        {/* logo section */}
        <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
          travellx
        </h2>

        {/* desktop menu */}
        <div className="hidden md:flex gap-5">
          <Link
            className="text-white text-md hover:text-green-300 transition-colors"
            href="/"
          >
            Home
          </Link>

          <Link
            className="text-white text-md hover:text-green-300 transition-colors"
            href="/about"
          >
            About
          </Link>

          <Link
            className="text-white text-md hover:text-green-300 transition-colors"
            href="/contact"
          >
            Contact
          </Link>

          <Link
            className="text-white text-md hover:text-green-300 transition-colors"
            href="/blog"
          >
            Blog
          </Link>
        </div>

        {/* desktop search & login */}
        <div className="hidden md:flex items-center gap-3">

          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="search any..."
              className="w-[300px] rounded-full outline-none px-3 py-1 pr-10"
            />

            <IoSearchSharp className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-2xl hover:text-green-900 transition-colors duration-200 cursor-pointer" />
          </div>

          <MdLogin className="text-white text-3xl cursor-pointer hover:text-green-300 transition-colors" />
        </div>

        {/* mobile menu button */}
        <div className="md:hidden flex items-center gap-2">

          <MdLogin className="text-white text-3xl cursor-pointer" />

          {isOpen ? (
            <IoCloseSharp
              onClick={() => setIsOpen(false)}
              className="text-white text-3xl cursor-pointer"
            />
          ) : (
            <MdMenu
              onClick={() => setIsOpen(true)}
              className="text-white text-3xl cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* mobile menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col gap-5 mt-5 bg-green-600 p-5 rounded-xl">

          <div className="relative">
            <input
              type="text"
              name="search"
              placeholder="search any..."
              className="w-full rounded-full outline-none px-3 py-2 pr-10"
            />

            <IoSearchSharp className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 text-2xl cursor-pointer" />
          </div>

          <Link
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-green-300"
            href="/"
          >
            Home
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-green-300"
            href="/about"
          >
            About
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-green-300"
            href="/contact"
          >
            Contact
          </Link>

          <Link
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-green-300"
            href="/blog"
          >
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;