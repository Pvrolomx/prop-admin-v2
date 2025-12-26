import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Modal from "@/components/Modal";
import { createPerson } from "@/app/actions";

export default async function PersonsPage() {
  const persons = await prisma.person.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", margin: 0 }}>Personas</h1>
        <Modal title="Agregar Persona">
          <form action={createPerson} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input name="name" placeholder="Nombre completo" required style={{ padding: "8px" }} />
            <input name="email" type="email" placeholder="Email" style={{ padding: "8px" }} />
            <input name="phone" placeholder="Teléfono" style={{ padding: "8px" }} />
            <input name="rfc" placeholder="RFC" style={{ padding: "8px" }} />
            <button type="submit" style={{ padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
              Guardar
            </button>
          </form>
        </Modal>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f5f5f5" }}>
            <th style={{ padding: "12px", textAlign: "left" }}>Nombre</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Email</th>
            <th style={{ padding: "12px", textAlign: "left" }}>RFC</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "12px" }}>
                <Link href={`/persons/${person.id}`} style={{ color: "#007bff" }}>{person.name}</Link>
              </td>
              <td style={{ padding: "12px" }}>{psurson.email || "-"}</td>
              <td style={{ padding: "12px" }}>{person.rfc || "-"}</td>
              <td style={{ padding: "12px" }}>{person.phone || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
