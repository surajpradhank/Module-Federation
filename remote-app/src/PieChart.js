import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = () => {
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartOptions({
            chart: { type: 'pie', backgroundColor: '#fff', borderRadius: 8 },
            title: { text: 'Market Share', style: { fontSize: '20px', fontWeight: 'bold', color: '#333' } },
            series: [{
                name: 'Share',
                data: [
                    { name: 'Product A', y: 45, color: '#007bff' },
                    { name: 'Product B', y: 30, color: '#dc3545' },
                    { name: 'Product C', y: 25, color: '#ffc107' }
                ]
            }],
            credits: { enabled: false },
            legend: { enabled: true }
        });
    }, []);

    return (
        <div style={{ padding: '20px', backgroundColor: '#f8f9fa', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};

export default PieChart;
