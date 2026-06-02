"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoSearchSharp, IoCloseSharp } from "react-icons/io5";
import { MdLogin, MdMenu } from "react-icons/md";

type Menu = {
  id: number;
  title: string;
  href: string;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState<Menu[]>([]);

  // ✅ fetch from API
  useEffect(() => {
    const fetchMenus = async () => {
      const res = await fetch("/api/dashboard");
      const data = await res.json();
      setItems(data);
    };

    fetchMenus();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-green-700 w-full shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3">

        {/* top navbar */}
        <div className="flex justify-between items-center gap-3">

          {/* logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/logo.png"
              width={50}
              height={50}
              className="w-[40px] md:w-[50px] h-auto"
              alt="logo"
            />

            <h2 className="text-xl md:text-3xl font-bold text-white">
              travelLX
            </h2>
          </div>

          {/* desktop menu */}
          <div className="hidden md:flex items-center gap-5">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="text-white hover:text-green-300"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* right section */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-[220px] xl:w-[300px] rounded-full px-4 py-2 pr-10 text-sm"
              />
              <IoSearchSharp className="absolute right-3 top-1/2 -translate-y-1/2 text-green-600 text-xl" />
            </div>

            <MdLogin className="text-white text-3xl cursor-pointer" />
          </div>

          {/* mobile button */}
          <div className="md:hidden flex items-center gap-2">
            <MdLogin className="text-white text-3xl" />

            {isOpen ? (
              <IoCloseSharp
                onClick={() => setIsOpen(false)}
                className="text-white text-3xl"
              />
            ) : (
              <MdMenu
                onClick={() => setIsOpen(true)}
                className="text-white text-3xl"
              />
            )}
          </div>
        </div>

        {/* mobile menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-5 mt-5 bg-green-600 p-5 rounded-2xl">

            {items.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg"
              >
                {item.title}
              </Link>
            ))}

          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;