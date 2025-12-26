import { prisma } from "@/lib/prisma";

export default async function Dashboard() {
  const stats = await Promise.all([
    prisma.property.count(),
    prisma.person.count(),
    prisma.contract.count({ where: { status: "ACTIVE" } }),
    prisma.alert.count({ where: { dismissed: false } }),
  ]);

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Dashboard</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        <div style={{ padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>{stats[0]}</div>
          <div>Properties</div>
        </div>
        <div style={{ padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>{stats[1]}</div>
          <div>Persons</div>
        </div>
        <div style={{ padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>{stats[2]}</div>
          <div>Active Contracts</div>
        </div>
        <div style={{ padding: "20px", background: "#f5f5f5", borderRadius: "8px" }}>
          <div style={{ fontSize: "32px", fontWeight: "bold" }}>{stats[3]}</div>
          <div>Alerts</div>
        </div>
      </div>
    </div>
  );
}
