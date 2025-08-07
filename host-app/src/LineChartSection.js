import React, { Suspense } from "react";

const RemoteLineChart = React.lazy(() => import("remote/LineChart"));

const LineChartSection = () => (
    <div className="section">
        <h2>Remote Line Chart</h2>
        <Suspense fallback={<div className="loading">Loading line chart...</div>}>
            <RemoteLineChart />
        </Suspense>
    </div>
);

export default LineChartSection;
