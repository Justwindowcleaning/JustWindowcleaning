export default function Page() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "4rem 2rem", textAlign: "center", backgroundColor: "#f4f9ff", minHeight: "100vh" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", background: "white", padding: "3rem", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
        <h1 style={{ color: "#0066cc", fontSize: "2.5rem", marginBottom: "1rem" }}>Just Window Cleaning</h1>
        <p style={{ color: "#555", fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "2rem" }}>
          Professional, reliable, and crystal-clear window cleaning services for your home and business.
        </p>
        <a 
          href="tel:00000000000" 
          style={{ background: "#0066cc", color: "white", padding: "0.8rem 1.8rem", borderRadius: "6px", textDecoration: "none", fontWeight: "bold", fontSize: "1.1rem" }}
        >
          Get a Free Quote
        </a>
      </div>
    </main>
  );
}
