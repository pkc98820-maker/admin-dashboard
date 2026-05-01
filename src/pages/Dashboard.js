function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        <div style={{ background: "#4CAF50", padding: "20px", color: "white" }}>
          Users: 120
        </div>

        <div style={{ background: "#2196F3", padding: "20px", color: "white" }}>
          Sales: ₹5000
        </div>

        <div style={{ background: "#f44336", padding: "20px", color: "white" }}>
          Orders: 80
        </div>
      </div>
    </div>
  );
}

export default Dashboard;