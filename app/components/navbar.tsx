"use client";

import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { LoginButton } from "./loginButton";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-green-700 px-3 md:px-8 py-3 w-full flex justify-between items-center">

      {/* logo section */}
      <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wider">
        travellx
      </h2>

      {/* desktop menu section */}
      <div className="hidden md:flex gap-5">
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

      {/* search section */}
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            name="search"
            placeholder="search any..."
            className="w-[300px] rounded-full outline-none hover:outline-green-400 transition-colors px-3 py-1 pr-10"
          />

          <IoSearchSharp className="text-green-400 text-2xl absolute right-3 top-1/2 -translate-y-1/2 hover:text-green-950 cursor-pointer" />
        </div>

        {/* login section */}
        <LoginButton />
      </div>
    </nav>
  );
};

export default Navbar;