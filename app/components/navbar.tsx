"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import { MdLogin, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3">
        
        {/* top navbar */}
        <div className="flex justify-between items-center gap-3">

          {/* logo section */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] h-auto"
              alt="logo"
            />

            <h2 className="text-xl md:text-3xl font-bold text-white tracking-wide">
              travelLX
            </h2>
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              className="text-white hover:text-green-300 transition-colors"
              href="/"
            >
              Home
            </Link>

            <Link
              className="text-white hover:text-green-300 transition-colors"
              href="/about"
            >
              About
            </Link>

            <Link
              className="text-white hover:text-green-300 transition-colors"
              href="/contact"
            >
              Contact
            </Link>

            <Link
              className="text-white hover:text-green-300 transition-colors"
              href="/blog"
            >
              Blog
            </Link>

            <Link
              className="text-white hover:text-green-300 transition-colors"
              href="/destinations"
            >
              Destinations
            </Link>

            <Link
              className="text-white hover:text-green-300 transition-colors"
              href="/gallery"
            >
              Gallery
            </Link>
          </div>

          {/* desktop search + login */}
          <div className="hidden lg:flex items-center gap-3">

            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="w-[220px] xl:w-[300px] rounded-full outline-none px-4 py-2 pr-10 text-sm"
              />

              <IoSearchSharp className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 text-xl cursor-pointer hover:text-green-900 transition-colors" />
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
          <div className="md:hidden flex flex-col gap-5 mt-5 bg-green-600 p-5 rounded-2xl w-full transition-all duration-300">

            {/* mobile search */}
            <div className="relative">
              <input
                type="text"
                name="search"
                placeholder="Search..."
                className="w-full rounded-full outline-none px-4 py-2 pr-10 text-sm"
              />

              <IoSearchSharp className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 text-xl cursor-pointer" />
            </div>

            {/* mobile links */}
            <Link
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-green-300 transition-colors"
              href="/"
            >
              Home
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-green-300 transition-colors"
              href="/about"
            >
              About
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-green-300 transition-colors"
              href="/contact"
            >
              Contact
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-green-300 transition-colors"
              href="/blog"
            >
              Blog
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-green-300 transition-colors"
              href="/destinations"
            >
              Destinations
            </Link>

            <Link
              onClick={() => setIsOpen(false)}
              className="text-white text-lg hover:text-green-300 transition-colors"
              href="/gallery"
            >
              Gallery
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;