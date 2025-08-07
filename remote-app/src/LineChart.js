import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LineChart = () => {
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartOptions({
            chart: { type: 'line', backgroundColor: '#fff', borderRadius: 8 },
            title: { text: 'User Growth', style: { fontSize: '20px', fontWeight: 'bold', color: '#333' } },
            xAxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], title: { text: 'Months' } },
            yAxis: { title: { text: 'Users' } },
            series: [{ name: 'Users', data: [120, 200, 350, 500, 800], color: '#28a745' }],
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

export default LineChart;
