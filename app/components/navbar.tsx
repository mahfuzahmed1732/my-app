"use client";
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  
  return(
      <nav className="sticky top-0 z-50 bg-red-700 p-5 w-full flex justify-between items-center">
        <div className="">
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase">My logo</h2>
        </div>
        <div className="flex gap-5">
          <Link className="text-white text-md hover:text-yollow-500 transition-colors pointer" href="/">home</Link>
          <Link className="text-white text-md hover:text-yollow-500 transition-colors pointer" href="/about">about</Link>
          <Link className="text-white text-md hover:text-yollow-500 transition-colors pointer" href="/contact">contact</Link>
          <Link className="text-white text-md hover:text-yollow-500 transition-colors pointer" href="/blog">blog</Link>
        </div>
      </nav>
    )
};

export default Navbar;