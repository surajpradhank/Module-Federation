import React, { Suspense } from "react";
import "./App.css";

const RemoteChart = React.lazy(() => import("remote/ChartComponent"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Host Application</h1>
      </header>

      <main className="main-content">
        <div className="section">
          <h2>Remote Chart Component</h2>
          <p>The chart below is loaded from the Remote application (port 3002) using Module Federation:</p>

          <Suspense fallback={<div className="loading">Loading remote chart...</div>}>
            <RemoteChart />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;