import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AreaChart = () => {
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartOptions({
            chart: { type: 'area', backgroundColor: '#fff', borderRadius: 8 },
            title: { text: 'Revenue Trend', style: { fontSize: '20px', fontWeight: 'bold', color: '#333' } },
            xAxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'], title: { text: 'Quarter' } },
            yAxis: { title: { text: 'Revenue ($)' } },
            series: [{ name: 'Revenue', data: [50000, 75000, 90000, 120000], color: '#17a2b8' }],
            credits: { enabled: false },
            legend: { enabled: false }
        });
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default AreaChart;
