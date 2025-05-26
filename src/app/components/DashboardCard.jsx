import dynamic from "next/dynamic";
const DashboardPieChart = dynamic(() => import("./DashboardPieChart"), {
  ssr: false,
});
export default function DashboardCard({ title, leerlingen, totaalLeerlingen }) {
  const pieData = [
    { name: "Extra aandacht", value: leerlingen },
    { name: "Overig", value: totaalLeerlingen - leerlingen },
  ];

  // Dynamische kleur (meer leerlingen = meer rood)
  const ratio = leerlingen / totaalLeerlingen;
  const pieColors = [
    ratio > 0.5 ? "#e74c3c" : ratio > 0.25 ? "#E10413" : "#E10413",
    "#0069B3",
  ];

  return (
    <section className="bg-white rounded-xl shadow p-6 min-h-[180px] flex flex-col justify-between ">
      {title && <h2 className="font-bold text-lg mb-3">{title}</h2>}
      <div className="flex items-center gap-8">
        <div className="text-6xl font-bold">{leerlingen}</div>
        <div>
          <div className="font-semibold">leerlingen</div>
          <div className="text-gray-500 text-sm">extra aandacht nodig</div>
        </div>
        <DashboardPieChart pieData={pieData} pieColors={pieColors} />
      </div>
    </section>
  );
}
