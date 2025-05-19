import Image from "next/image";

export default function Sidebar() {
  return (
    <aside className="bg-gradient-to-b from-blue-100 to-blue-200 w-56 min-h-screen p-4 flex flex-col gap-2">
      <div className="mb-8">
        <div className="mb-8">
          <Image
            src="/images/Logo.png"
            alt="Zwijsen logo"
            width={120} // pas aan naar wens
            height={48} // pas aan naar wens
            className="h-12 w-auto"
            priority
          />
        </div>

        <div className="text-xs text-gray-600">Breng leren tot leven</div>
      </div>
      <nav className="flex flex-col gap-2">
        <a
          href="#"
          className="py-2 px-4 rounded bg-white text-blue-700 font-semibold"
        >
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
    </aside>
  );
}
