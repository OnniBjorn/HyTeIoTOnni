import React, { useState } from 'react';
import './App.css';
import Chart from "react-google-charts";

function App() {

const initWeather = [];

const [weather, setWeather] = useState(initWeather);


function convertUTCDateToLocalDate(date) {
  //var dateLocal = new Date(date);
  new Date(date.getTime() + date.getTimezoneOffset()*60*1000);
  return date;
}


let chartHumData = [
  ['Aika', '%'],
  ['Loading...', 0]

];


let chartTempData = [
  ['Aika', '°C'],
  ['Loading...', 0]

];

fetch('https://oppilas-11.azurewebsites.net/api/HttpTriggerCSharp2?code=2oO4x2gTHZUkLoeN/jWdnzkvg5BlU9uud6b75mc/wr3jKukq0wtswg==&deviceId=3e0037001947393035313138&amount=10')
  .then(response => response.json())
  .then(json => setWeather([...json]));

let humtempkey = 1;
const rows = () => weather.map(temphum => {

  if(chartHumData[1][0] === 'Loading...'){
    chartHumData.pop();
  }

  if(chartTempData[1][0] === 'Loading...'){
    chartTempData.pop();
  }


  chartHumData.push([String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4],parseInt(temphum.Hum)])
  
  chartTempData.push([String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4],parseInt(temphum.Temp)])

  

  return <div key={humtempkey++}>
    <b>Klo:</b>{String(convertUTCDateToLocalDate(new Date(temphum.Timestamp))).split(' ')[4]} &nbsp; <b>Lämpötila:</b>{temphum.Temp} °C &nbsp; <b>Ilmankosteus:</b>{temphum.Hum} % 
  </div>
})


  return (
    <div className="App">
      {rows()}
     <div style={{ display: 'flex'}}>
      <Chart
        width={1000}
        height={300}
        chartType="ColumnChart"
        loader={<div>Loading Chart</div>}
        data={chartHumData}
        options={{
          title: 'Ilmankosteus',
         
          hAxis: {
            title: '',
            minValue: 0,
          },
        }}
        legendToggle
      />
      </div>


      <div style={{ display: 'flex'}}>
      <Chart
        width={1000}
        height={300}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={chartTempData}
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
