import React, { Suspense } from "react";

import Remote from "remote/AreaChart";

const AreaChartSection = () => (
    <div className="section">
        <h2>Remote Area Chart</h2>
        <Suspense fallback={<div className="loading">Loading area chart...</div>}>
            <Remote />
        </Suspense>
    </div>
);

export default AreaChartSection;
