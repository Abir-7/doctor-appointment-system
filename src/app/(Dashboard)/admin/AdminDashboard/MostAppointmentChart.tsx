'use client'

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};

const MostAppointmentChart = () => {
  return (
<div className='w-[400px]'>
    <h1 className='text-center text-gray-600 font-semibold text-xs mt-3'>Top Appointed Doctor</h1>
<div className='mt-[-30px]'>
<PolarArea className=' h-full' data={data}  options={{
        plugins: {
            legend: {
                position: 'right',   
            align:'center'
            },
        },
    }} />
</div>
</div>
  )
}

export default MostAppointmentChart