import React, { Suspense } from "react";

const RemotePieChart = React.lazy(() => import("remote/PieChart"));

const PieChartSection = () => (
    <div className="section">
        <h2>Remote Pie Chart</h2>
        <Suspense fallback={<div className="loading">Loading pie chart...</div>}>
            <RemotePieChart />
        </Suspense>
    </div>
);

export default PieChartSection;
