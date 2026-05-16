"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-green-700 p-5 w-full flex justify-between items-center">
      
      <h2 className="text-xl md:text-2xl font-bold text-white uppercase">
        mahfuz.<span className="text-sm text-red-500">com</span>
      </h2>

      <div className="flex gap-5">
        <Link className="text-white text-md hover:text-red-500 transition-colors" href="/">
          Home
        </Link>

        <Link className="text-white text-md hover:text-red-500 transition-colors" href="/about">
          About
        </Link>

        <Link className="text-white text-md hover:text-red-500 transition-colors" href="/contact">
          Contact
        </Link>

        <Link className="text-white text-md hover:text-red-500 transition-colors" href="/blog">
          Blog
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;