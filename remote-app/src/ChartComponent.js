import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ChartComponent = () => {
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    const options = {
      chart: {
        type: 'column',
        backgroundColor: '#ffffff',
        borderRadius: 8,
      },
      title: {
        text: 'Monthly Sales Report',
        style: {
          fontSize: '20px',
          fontWeight: 'bold',
          color: '#333'
        }
      },
      subtitle: {
        text: 'Data from Remote Module Federation App'
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        title: {
          text: 'Months'
        }
      },
      yAxis: {
        title: {
          text: 'Sales ($)'
        },
        labels: {
          formatter: function () {
            return '$' + this.value.toLocaleString();
          }
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.x + '</b><br/>' +
            this.series.name + ': <b>$' + this.y.toLocaleString() + '</b>';
        }
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            formatter: function () {
              return '$' + (this.y / 1000) + 'k';
            }
          }
        }
      },
      series: [{
        name: 'Sales',
        data: [29950, 71050, 106400, 89200, 144000],
        color: '#61dafb'
      }],
      credits: {
        enabled: false
      },
      legend: {
        enabled: false
      }
    };

    setChartOptions(options);
  }, []);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default ChartComponent;