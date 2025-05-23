"use client";
import { PieChart, Pie, Cell } from "recharts";

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
        <PieChart width={100} height={100}>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            innerRadius={24}
            outerRadius={36}
            dataKey="value"
            startAngle={90}
            endAngle={-270}
          >
            {pieData.map((_, i) => (
              <Cell key={i} fill={pieColors[i]} />
            ))}
          </Pie>
        </PieChart>
      </div>
    </section>
  );
}
