import DashboardCard from "./components/DashboardCard";

export default function Home() {
  // Voorbeelddata, kun je dynamisch maken
  const leerlingenExtraAandacht = 3;
  const totaalLeerlingen = 24;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <DashboardCard
        title="Groeps overzicht"
        leerlingen={leerlingenExtraAandacht}
        totaalLeerlingen={totaalLeerlingen}
      />
      {/* Andere DashboardCards... */}
    </div>
  );
}
