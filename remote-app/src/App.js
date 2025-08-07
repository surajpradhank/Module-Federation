import React from "react";
import ChartComponent from "./ChartComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Remote Application</h1>
      </header>

      <main className="main-content">
        <div className="section">
          <ChartComponent />
        </div>
      </main>
    </div>
  );
}

export default App;