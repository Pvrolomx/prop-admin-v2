import { prisma } from "@/lib/prisma";
import Link from "next/link";

export default async function PersonsPage() {
  const persons = await prisma.person.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Persons</h1>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "12px", textAlign: "left" }}>Name</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "12px", textAlign: "left" }}>RFC</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "12px" }}>
                <Link href={`/persons/${person.id}`}>{person.name}</Link>
              </td>
              <td style={{ padding: "12px" }}>{person.email || "-"}</td>
              <td style={{ padding: "12px" }}>{person.rfc || "-"}</td>
              <td style={{ padding: "12px" }}>{person.phone || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
