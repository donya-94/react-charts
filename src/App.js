
import './App.css';
import { useState } from 'react';
import {BarChartData} from './Data';
import {DoughnutData} from './Data';
import Barchart from './components/Barchart';
import DoughnutChart from './components/DoughnutChart';
import Table from './components/Table';

function App() {

  const [barChartData , setBarchartData] = useState({
    labels: BarChartData.map((data) => data.name) ,
    datasets: [{
      label : "Percentage",
      data: BarChartData.map((data) => data.value),
      // backgroundColor: ["pink"],
      borderWidth: 2,
    }],
  });

  const [doughnutdata , setDoughnutData] = useState({
    labels: DoughnutData.map((data) => data.name) ,
    datasets: [{
      data: DoughnutData.map((data) => data.value),
      backgroundColor: ['green', 'red', 'blue'],
      borderWidth: 2,
    }],
  });

  return (
    <div className="App">
      <div style={{width : 600}}>
        <Barchart charData={barChartData} />
      </div>

      {/* <div >
        <DoughnutChart chardata={doughnutdata} />
      </div> */}
    
      <div><Table/></div>
    </div>
  );
}

export default App;
