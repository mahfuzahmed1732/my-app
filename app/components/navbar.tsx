"use client";

import Link from "next/link";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import { MdLogin } from "react-index-md"; // Note: Changed to match standard react-icons layout if needed, but keeping your import logic
import { MdLogin as LoginIcon, MdMenu } from "react-icons/md"; 

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
      
      {/* mobile menu section */}
      {/* Tip: You will eventually want to control the visibility of this div with a state variable (e.g., isOpen && (...)) */}
      <div className="w-full h-auto px-10  py-5 absolute top-[60px] left-0 bg-green-700 flex flex-col items-center gap-5 md:hidden">
         <Link
          className="text-white text-xl hover:text-green-300 transition-colors cursor-pointer"
          href="/"
        >
          Home
        </Link>

        <Link
          className="text-white text-xl hover:text-green-300 transition-colors"
          href="/about"
        >
          About
        </Link>

        <Link
          className="text-white text-xl hover:text-green-300 transition-colors"
          href="/contact"
        >
          Contact
        </Link>

        <Link
          className="text-white text-xl hover:text-green-300 transition-colors"
          href="/blog"
        >
          Blog
        </Link>
        
        <div className="flex md:hidden relative w-full max-w-[350px]">
          <input
            type="text"
            name="search"
            placeholder="search any..."
            className="w-full rounded-full outline-none focus:ring-2 focus:ring-green-400 transition-all p-2 pr-10 text-sm text-gray-800"
          />
          <IoSearchSharp className="text-green-600 text-xl absolute right-3 top-1/2 -translate-y-1/2 hover:text-green-900 cursor-pointer" />
        </div>
      </div>
       
      {/* search & login */}
      <div className="flex items-center gap-4 md:gap-8">
        {/* search section */}
        <div className="hidden md:block relative">
          <input
            type="text"
            name="search"
            placeholder="search any..."
            className="w-full rounded-full outline-none focus:ring-2 focus:ring-green-400 transition-all p-2 md:py-1 pr-10 text-sm text-gray-800"/>
          <IoSearchSharp className="text-green-700 text-xl absolute right-3 top-1/2 -translate-y-1/2 hover:text-green-400 cursor-pointer" />
        </div>

        {/* login section */}
        <Link href="/login" className="hover:text-green-300 transition-colors cursor-pointer">
          <LoginIcon className="text-2xl md:text-3xl text-white" />
        </Link>
        <div className="">
          <MdMenu className="md:hidden text-3xl text-white"/>
          <IoCloseSharp className="md:hidden text-3xl text-white"/>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;