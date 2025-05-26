"use client";
import { PieChart, Pie, Cell } from "recharts";

export default function DashboardPieChart({ pieData, pieColors }) {
  return (
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
  );
}
