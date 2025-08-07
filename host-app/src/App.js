

import React, { useState } from "react";
import "./App.css";
import DynamicRemoteComponent from "./DynamicRemoteComponent";

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
            <DynamicRemoteComponent
              remoteUrl="http://localhost:3002/remoteEntry.js"
              scope="remote"
              module="./ChartComponent"
              fallback={<div className="loading">Loading remote chart...</div>}
            />
          </div>
        )}
        {activeTab === "line" && (
          <div className="section">
            <h2>Remote Line Chart</h2>
            <DynamicRemoteComponent
              remoteUrl="http://localhost:3002/remoteEntry.js"
              scope="remote"
              module="./LineChart"
              fallback={<div className="loading">Loading line chart...</div>}
            />
          </div>
        )}
        {activeTab === "pie" && (
          <div className="section">
            <h2>Remote Pie Chart</h2>
            <DynamicRemoteComponent
              remoteUrl="http://localhost:3002/remoteEntry.js"
              scope="remote"
              module="./PieChart"
              fallback={<div className="loading">Loading pie chart...</div>}
            />
          </div>
        )}
        {activeTab === "area" && (
          <div className="section">
            <h2>Remote Area Chart</h2>
            <DynamicRemoteComponent
              remoteUrl="http://localhost:3002/remoteEntry.js"
              scope="remote"
              module="./AreaChart"
              fallback={<div className="loading">Loading area chart...</div>}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;