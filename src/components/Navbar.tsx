import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 px-32 border border-[#197686] rounded-lg bg-transparent ml-32 mr-32 text-white">
      <Image src="/img/logo.png" alt="Logo" width={100} height={50} />
      <div className="space-x-6">
        <Link href="/">Events</Link>
        <Link href="/tickets">My Tickets</Link>
        <Link href="/about">About Project</Link>
      </div>
      <button className="px-4 py-2 flex items-center gap-2 bg-white text-black rounded-lg">
        MY TICKETS 
        <Image src="/img/arrow.png" alt="Logo" width={20} height={20} />
      </button>
    </nav>
  );
}
