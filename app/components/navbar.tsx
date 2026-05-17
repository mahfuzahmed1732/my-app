"use client";

import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { MdLogin } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-green-700 px-10 py-3 w-full flex justify-between items-center">

      {/* logo section */}
      <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider">
        travellx
      </h2>

      {/* menu section */}
      <div className="hidden sm:flex gap-5">
        <Link
          className="text-white text-md hover:text-green-300 transition-colors cursor-pointer"
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
       
      <div className="flex items-center gap-4 md:gap-8">
        {/* search section */}
        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="search any..."
            className="w-[150px] sm:w-[200px] md:w-[250px] rounded-full outline-none focus:ring-2 focus:ring-green-400 transition-all px-3 py-1 pr-10 text-sm text-gray-800"
          />
          <IoSearchSharp className="text-green-600 text-xl absolute right-3 top-1/2 -translate-y-1/2 hover:text-green-900 cursor-pointer" />
        </div>

        {/* login section */}
        <Link href="/login" className="hover:text-green-300 transition-colors cursor-pointer">
          <MdLogin className="text-4xl text-white" />
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;