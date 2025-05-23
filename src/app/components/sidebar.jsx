import Image from "next/image";

export default function Sidebar() {
  return (
    <main
      className="w-56 min-h-screen p-4 flex flex-col gap-2"
      className="w-56 min-h-screen flex flex-col gap-2"
      style={{
        background:
          "linear-gradient(to bottom, rgba(1,160,226,0.05) 0%, rgba(1,160,226,0.10) 100%)",
      }}
    >
      <div className="mb-8">
        <div className="mb-8">
          <Image
            src="/zwijsen_logo.svg"
            alt="Zwijsen logo"
            width={242} // pas aan naar wens
            height={124} // pas aan naar wens
            className="h-20 w-auto"
            className="h-24 w-auto"
            priority
          />
        </div>
      </div>
      <nav className="flex flex-col gap-2 text-right">
        <a
          href="#"
          className="py-2 px-4 rounded bg-white text-blue-700 font-semibold"
        >
        <a href="#" className="py-2 px-4 bg-[#0069B3] text-white font-semibold">
          Dashboard
        </a>
        <a href="#" className="py-2 px-4 rounded hover:bg-white">
          Werkblad scannen
        </a>
        <a href="#" className="py-2 px-4 rounded hover:bg-white">
          Leerlingen lijst
        </a>
        <a href="#" className="py-2 px-4 rounded hover:bg-white">
          Evaluatie
        </a>
        <a href="#" className="py-2 px-4 rounded hover:bg-white">
          Instellingen
        </a>
      </nav>
    </main>
  );
}
