export default function DashboardCard({ title, children }) {
  return (
    <section className="bg-white rounded-xl shadow p-6 min-h-[180px] flex flex-col justify-between">
      {title && <h2 className="font-bold text-lg mb-3">{title}</h2>}
      {children}
    </section>
  );
}
