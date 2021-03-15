import React from 'react';
import './App.css';
import Chart from "react-google-charts";

function App() {
  return (
    <div className="App">
     <div style={{ display: 'flex', maxWidth: 1900 }}>
      <Chart
        width={1400}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['', '%'],
          ['13:30', 26],
          ['13:31', 21],
          ['13:32', 20],
          ['13:33', 24],
          ['13:34', 23],
          ['13:35', 26],
          ['13:36', 21],
          ['13:37', 20],
          ['13:38', 24],
          ['13:39 ', 23],
        ]}
        options={{
          title: 'Ilmankosteus',
          chartArea: { width: '30%' },
          hAxis: {
            title: '',
            minValue: 0,
          },
          vAxis: {
            title: 'City',
          },
        }}
        legendToggle
      />
      </div>
      <div style={{ display: 'flex', maxWidth: 900 }}>
      <Chart
        width={400}
        height={'300px'}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Year', '°C'],
          ['2013', 26],
          ['2014', 23],
          ['2015', 24],
          ['2016', 22],
          ['2013', 26],
          ['2014', 23],
          ['2015', 24],
          ['2016', 22],
          ['2015', 23],
          ['2016', 26],
        ]}
        options={{
          title: 'Lämpötila',
          hAxis: { title: '', titleTextStyle: { color: '#333' } },
          vAxis: { minValue: 0 },
          // For the legend to fit, we make the chart area smaller
          chartArea: { width: '50%', height: '70%' },
          // lineWidth: 25
        }}
        />
      </div>
    </div>
  );
}

export default App;
