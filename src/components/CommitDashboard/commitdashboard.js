import React, { useState, useEffect } from 'react'
import { Doughnut } from 'react-chartjs-2';
import { ScaleLoader } from "react-spinners";


import "./commitdashboard.scss"

export default function CommitDashboard(props) {

  let totalCommits = 0;

  props.data.forEach((e) => {
    totalCommits += Number(e.commitsLM);
  })

  let dataLW = {
    labels: [],
    datasets: [{
      label: '# of Commits',
      data: [],
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
    borderWidth: 1
    }]
  };

  let dataLM = {
    labels: [],
    datasets: [{
      label: '# of Commits',
      data: [],
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
    borderWidth: 1
    }]
  };

  const [ dataset, setDataset ] = useState('');

    useEffect(() => {
      if(props.data.length !== 0) {
    
        props.data.forEach((e) => {
          if(e.commitsLW != 0) {
            dataLW.labels.push(e.name);
            dataLW.datasets[0].data.push(e.commitsLW);
          }
    
          if(e.commitsLM != 0) {
            dataLM.labels.push(e.name);
            dataLM.datasets[0].data.push(e.commitsLM);
          }
    
        })
        setDataset(dataLM);
      }
    }, [props.data]);


  return (
    <div className="dashboard">
      <p>Any master of their craft could tell you that the only way to keep getting better at something - is to keep practicing it everyday.</p>
      <p>Here you can see my non-private github commits for last 4 weeks.</p>
      <h3>Total commits: {totalCommits}</h3>

      {props.loading === 'false' && <Doughnut data={dataset} height={80}/>}
      {props.loading === 'true' && <ScaleLoader height={100} />}
      
    </div>
  )
}