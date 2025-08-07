

import React, { useState } from "react";
import "./App.css";
import LineChartSection from "./LineChartSection";
import PieChartSection from "./PieChartSection";
import AreaChartSection from "./AreaChartSection";
const RemoteChart = React.lazy(() => import("remote/ChartComponent"));

function App() {
  const [activeTab, setActiveTab] = useState("chart");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Host Application</h1>
      </header>
      <main className="main-content">
        <div className="tabs" style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <button onClick={() => setActiveTab("chart")}
            style={{ padding: "10px 20px", background: activeTab === "chart" ? "#61dafb" : "#eee", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Chart
          </button>
          <button onClick={() => setActiveTab("line")}
            style={{ padding: "10px 20px", background: activeTab === "line" ? "#61dafb" : "#eee", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Line Chart
          </button>
          <button onClick={() => setActiveTab("pie")}
            style={{ padding: "10px 20px", background: activeTab === "pie" ? "#61dafb" : "#eee", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Pie Chart
          </button>
          <button onClick={() => setActiveTab("area")}
            style={{ padding: "10px 20px", background: activeTab === "area" ? "#61dafb" : "#eee", border: "none", borderRadius: "4px", cursor: "pointer" }}>
            Area Chart
          </button>
        </div>
        {activeTab === "chart" && (
          <div className="section">
            <h2>Remote Chart Component</h2>
            <p>The chart below is loaded from the Remote application (port 3002) using Module Federation:</p>
            <React.Suspense fallback={<div className="loading">Loading remote chart...</div>}>
              <RemoteChart />
            </React.Suspense>
          </div>
        )}
        {activeTab === "line" && <LineChartSection />}
        {activeTab === "pie" && <PieChartSection />}
        {activeTab === "area" && <AreaChartSection />}
      </main>
    </div>
  );
}

export default App;