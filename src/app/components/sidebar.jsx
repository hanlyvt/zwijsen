"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <main
      className="w-56 min-h-screen flex flex-col gap-2"
      style={{
        background:
          "linear-gradient(to bottom, rgba(1,160,226,0.05) 0%, rgba(1,160,226,0.10) 100%)",
      }}
    >
      <div className="m-4">
        <div className="mb-8">
          <Image
            src="/zwijsen_logo.svg"
            alt="Zwijsen logo"
            width={242}
            height={124}
            priority
          />
        </div>
      </div>
      <nav className="flex flex-col gap-2 text-right">
        <Link
          href="/"
          className={`py-2 px-4 font-semibold rounded ${
            pathname === "/" ? "bg-[#0069B3] text-white" : "hover:bg-white"
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/leerlingenlijst"
          className={`py-2 px-4 rounded ${
            pathname === "/leerlingenlijst"
              ? "bg-[#0069B3] text-white font-semibold"
              : "hover:bg-white"
          }`}
        >
          Leerlingen lijst
        </Link>
        <Link href="#" className="py-2 px-4 rounded hover:bg-white">
          Evaluatie
        </Link>
        <Link href="#" className="py-2 px-4 rounded hover:bg-white">
          Instellingen
        </Link>
      </nav>
    </main>
  );
}
