export const metadata = { title: "Prop Admin", description: "Property Management System" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body style={{ margin: 0, fontFamily: "system-ui, sans-serif" }}>
<div style={{ display: "flex", minHeight: "100vh" }}>
<nav style={{ width: "200px", background: "#1a1a1a", color: "#fff", padding: "20px" }}>
<h2 style={{ fontSize: "18px", marginBottom: "20px" }}>Prop Admin</h2>
<ul style={{ listStyle: "none", padding: 0 }}>
<li style={{ marginBottom: "10px" }}><a href="/dashboard" style={{ color: "#fff", textDecoration: "none" }}>Dashboard</a></li>
<li style={{ marginBottom: "10px" }}><a href="/properties" style={{ color: "#fff", textDecoration: "none" }}>Properties</a></li>
<li style={{ marginBottom: "10px" }}><a href="/persons" style={{ color: "#fff", textDecoration: "none" }}>Persons</a></li>
</ul>
</nav>
<main style={{ flex: 1, padding: "20px" }}>{children}</main>
</div>
</body></html>);
}
