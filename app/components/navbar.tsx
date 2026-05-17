"use client";

import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-green-700 px-5 py-3 w-full flex justify-between items-center">

      {/* logo section */}
      <h2 className="text-xl md:text-2xl font-bold text-white uppercase">
        travellx
      </h2>

      {/* menu section */}
      <div className="flex gap-5">
        <Link
          className="text-white text-md hover:text-green-400 transition-colors cursor-pointer"
          href="/"
        >
          Home
        </Link>

        <Link
          className="text-white text-md hover:text-green-400 transition-colors"
          href="/about"
        >
          About
        </Link>

        <Link
          className="text-white text-md hover:text-green-400 transition-colors"
          href="/contact"
        >
          Contact
        </Link>

        <Link
          className="text-white text-md hover:text-green-400 transition-colors"
          href="/blog"
        >
          Blog
        </Link>
      </div>

      {/* search section */}
      <div className="relative">
        <input
          type="text"
          name="search"
          placeholder="search any..."
          className="w-[300px] rounded-full outline-none hover:outline-green-400 transition-colors px-3 py-1 pr-10"
        />

        <IoSearchSharp className="text-green-400 text-2xl absolute right-3 top-1/2 -translate-y-1/2 hover:text-green-950 cursor-pointer" />
      </div>

    </nav>
  );
};

export default Navbar;