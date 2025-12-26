import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Properties</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Type</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "12px" }}>
                <Link href={`/properties/${prop.id}`}>{prop.name}</Link>
              </td>
              <td style={{ padding: "12px" }}>{prop.type}</td>
              <td style={{ padding: "12px" }}>{prop.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
