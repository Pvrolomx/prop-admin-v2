import { prisma } from "@/lib/prisma";
import Link from "next/link";
import Modal from "@/components/Modal";
import { createProperty } from "@/app/actions";

export default async function PropertiesPage() {
  const properties = await prisma.property.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "24px", margin: 0 }}>Properties</h1>
        <Modal title="Agregar Propiedad">
          <form action={createProperty} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <input name="name" placeholder="Nombre" required style={{ padding: "8px" }} />
            <select name="type" required style={{ padding: "8px" }}>
              <option value="HOUSE">Casa</option>
              <option value="APARTMENT">Departamento</option>
              <option value="COMMERCIAL žComercial</option>
            </select>
            <input name="address" placeholder="DirecciÃ³n" required style={{ padding: "8px" }} />
            <input name="city" placeholder="Ciudad" required style={{ padding: "8px" }} />
            <input name="state" placeholder="Estado" required style={{ padding: "8px" }} />
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
            <th style={{ padding: "12px", textAlign: "left" }}>Tipo</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Estatus</th>
            <th style={{ padding: "12px", textAlign: "left" }}>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id} style={{ borderBottom: "1px solid #eee" }}>
              <td style={{ padding: "12px" }}>
                <Link href={`/properties/${prop.id}`} style={{ color: "#007bff" }}>{prop.name}</Link>
              </td>
              <td style={{ padding: "12px" }}>{prop.type}</td>
              <td style={{ padding: "12px" }}>{prop.status}</td>
              <td style={{ padding: "12px" }}>{prop.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
