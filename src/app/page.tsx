import DashboardCard from "./components/DashboardCard";
import WerkbladenCard from "./components/WerkbladenCard";

export default function Home() {
  // Voorbeelddata, kun je dynamisch maken
  const leerlingenExtraAandacht = 3;
  const totaalLeerlingen = 24;

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 gap-8 m-4">
      <DashboardCard
        title="Groeps overzicht"
        leerlingen={leerlingenExtraAandacht}
        totaalLeerlingen={totaalLeerlingen}
      />
      <WerkbladenCard />
    </div>
  );
}
