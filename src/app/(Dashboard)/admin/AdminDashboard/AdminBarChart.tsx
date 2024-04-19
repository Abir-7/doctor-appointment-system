'use client'
import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

const AdminBarChart = () => {


    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
      );

const dataValue=[
    { month: "January", amount: 1000 },
    { month: "February", amount: 1500 },
    { month: "March", amount: 2000 },
    { month: "April", amount: 1800 },
    { month: "May", amount: 2500 },
    { month: "June", amount: 2200 },
    { month: "July", amount: 1900 },
    { month: "August", amount: 2100 },
    { month: "September", amount: 2300 },
    { month: "October", amount: 2600 },
    { month: "November", amount: 2800 },
    { month: "December", amount: 3000, }
]
    const data = {
        labels:dataValue.map(data=>data.month),
        datasets: [
          {
            label: 'Total Appointment',
            data: dataValue.map(data=>data.amount),
            backgroundColor: ' rgba(59, 130, 246, 0.8)',
          },
        //   {
        //     label: 'Dataset 2',
        //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //   },
        ],
      };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'All Appointment Data',
          },
        },
      };

  return (
    <Bar options={options} data={data} />
  )
}

export default AdminBarChart