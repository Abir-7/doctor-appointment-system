import React from "react";
import SingleTableData from "./SingleTableData";
import styles from './DoctorTimeTable.module.css'
const DoctorTimeTable = () => {
   
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
  return (
    <div className={` ${styles.scrollStyle} w-full overflow-auto`}>
      <table className="table-fixed min-w-full border-collapse border border-slate-500">
        <thead className="bg-red-600">
          <tr className="text-white">
            <th className="border text-nowrap p-2 ">Week / Time</th>
            <th className="border p-2">Saturday</th>
            <th className="border p-2">Sunday</th>
            <th className="border p-2 ">Monday</th>
            <th className="border p-2 ">Tuesday</th>
            <th className="border p-2 ">Wednesday</th>
            <th className="border p-2 ">Thursday</th>
            <th className="border p-2 ">Friday</th>
          </tr>
        </thead>
        <tbody>
          {/* start time 9.00 am */}
          <tr className="">
            <td className="border text-center font-semibold text-red-600 p-2 ">9.00 am</td>
            {
                daysOfWeek.map(day=>    <td key={day} className="border text-nowrap p-2">
                <SingleTableData day={day} time={'9.00'} ></SingleTableData>
                </td>)
            }

          </tr>
          {/* start time 12.00 pm */}
          <tr className="">
            <td className="border text-center font-semibold text-red-600 p-2 ">12.00 pm</td>
            {
                daysOfWeek.map(day=>    <td key={day} className="border text-nowrap p-2">
                <SingleTableData day={day} time={'9.00'} ></SingleTableData>
                </td>)
            }
          </tr>
          {/* start time 3.00 pm */}
          <tr className="">
            <td className="border text-center  p-2 font-semibold text-red-600 ">3.00 pm</td>
            {
                daysOfWeek.map(day=>    <td key={day} className="border text-nowrap p-2">
                <SingleTableData day={day} time={'9.00'} ></SingleTableData>
                </td>)
            }
          </tr>
          {/* start time 6.00 pm */}
          <tr className="">
            <td className="border text-center font-semibold text-red-600 p-2 ">6.00 pm</td>
            {
                daysOfWeek.map(day=>    <td key={day} className="border text-nowrap p-2">
                <SingleTableData day={day} time={'9.00'} ></SingleTableData>
                </td>)
            }
          </tr>
          {/* start time 9.00 pm */}
          <tr className="">
            <td className="border text-center font-semibold text-red-600 p-2 ">9.00 pm</td>
            {
                daysOfWeek.map(day=>    <td key={day} className="border text-nowrap p-2">
                <SingleTableData day={day} time={'9.00'} ></SingleTableData>
                </td>)
            }
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DoctorTimeTable;
