import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  BarElement,
} from 'chart.js';

import { Line } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  BarElement,
  Legend
);


const LineChart = () => {
  const [chart, setChart] = useState([])
  const [chart1, setChart1] = useState([])

  var baseUrl = "https://api.coinranking.com/v2/coins/?limit=10";
  var proxyUrl = "https://cors-anywhere.herokuapp.com/";
  var apiKey = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";



  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/update/getUpdate`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
    }
  }).then(res=>
    {
      console.log(res.status)
      if(res.status===200)
      {
        console.log(res.data)
        setChart(res.data)
      }
    })
    axios.get(`http://localhost:8080/api/v1/financial/getReport`,{
    headers: {
      'Authorization': `Bearer ${localStorage.getItem("token")}`, 
    }
  }).then(res=>
    {
      console.log(res.status)
      if(res.status===200)
      {
        console.log(res.data)
        setChart1(res.data)
      }
    })
   
  }, [])

  console.log("chart", chart);
  var data = {
    labels: chart&&chart.map(x => x.updateDate),
    datasets: [{
      label: ` number of product`,
      data: chart&&chart.map(x => x.numOfProducts),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      color:'rgba(0, 0, 0, 1)',
      borderWidth: 1
    }]
  };
  const data1 = {
    labels: chart1&&chart1.map(x => x.month),
    datasets: [{
      label: 'profit per month ',
      data: chart1&&chart1.map(x => x.profitsOfTheMonth),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <main style={{marginTop: "50px ",height:"1000px",backgroundColor:"white"}}  id="main" className="main">
    <div style={{marginTop:"50px",color:"black"}} >
      <Line
        data={data}
        height={400}
        options={options}
      />
    </div>
    <div style={{marginTop:"50px",color:"black"}} >
      <Bar
        data={data1}
        height={400}
        options={options}
      />
    </div>
    </main>
  )
}

export default LineChart