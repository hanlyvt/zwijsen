"use client";

import Image from "next/image";

export default function WerkbladenCard() {
  return (
    <section className="bg-white rounded-xl shadow p-6 min-h-[180px] flex items-center gap-4">
      <Image
        src="/Werkblad_1.jpg"
        alt="Werkblad"
        width={120}
        height={120}
        className="rounded"
      />
      <div>
        <div className="font-semibold">Kien: Werkblad Algemeen</div>
        <div className="text-gray-500 text-sm">15 minuten geleden</div>
      </div>
    </section>
  );
}
