"use client";
import React from "react";
import Image from "next/image";

import DashboardCard from "./components/DashboardCard";
import WerkbladenCard from "./components/WerkbladenCard";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="mb-8">
          <Image
            src="/zwijsen_logo.svg"
            alt="Zwijsen logo"
            width={242} // pas aan naar wens
            height={124} // pas aan naar wens
            className="h-20 w-auto"
            priority
          />
        </div>
      </main>
    </div>
  );
}
