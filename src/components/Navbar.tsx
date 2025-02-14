"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="py-10">
      <nav className="flex justify-between items-center p-4 px-4 border border-[#197686] rounded-lg bg-transparent mx-4 md:mx-32 text-[#B3B3B3]">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />

  
        <button className="md:hidden" onClick={toggleMenu}>
          <Image src="/menu.png" alt="Menu" width={20} height={20} />
        </button>

        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex md:space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-[#072429] border border-[#02191D] md:bg-transparent p-4 md:p-0`}>
          {[
            { name: "Events", path: "/" },
            { name: "My Tickets", path: "/tickets" },
            { name: "About Project", path: "/about" },
          ].map(({ name, path }) => (
            <Link
              key={path}
              href={path}
              className={`${
                pathname === path ? "text-white font-bold" : "text-[#B3B3B3]"
              } hover:text-[#1b8094] transition-colors block md:inline-block`}
            >
              {name}
            </Link>
          ))}
        </div>

        <button className="md:px-4 p-1.5 md:py-2 flex items-center gap-2 bg-white text-black rounded-lg hover:bg-[#1b8094] transition-colors text-sm">
          MY TICKETS
          <Image src="/arrow.png" alt="Logo" width={20} height={20} />
        </button>
      </nav>
    </div>
  );
}