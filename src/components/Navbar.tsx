"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="py-10">
      <nav className="flex justify-between items-center p-4 px-4 border border-[#197686] rounded-lg bg-transparent mx-4 md:mx-32 text-[#B3B3B3]">
        <Image src="/logo.png" alt="Logo" width={100} height={50} />

        <div className="hidden md:flex space-x-6">
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
              } hover:text-[#1b8094] transition-colors`}
            >
              {name}
            </Link>
          ))}
        </div>

        <button className="px-4 py-2 flex items-center gap-2 bg-white text-black rounded-lg hover:bg-[#1b8094] transition-colors">
          MY TICKETS
          <Image src="/arrow.png" alt="Logo" width={20} height={20} />
        </button>
      </nav>
    </div>
  );
}
