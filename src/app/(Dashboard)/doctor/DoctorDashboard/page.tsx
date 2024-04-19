import DoughnutChart from "@/app/(Dashboard)/doctor/DoctorDashboard/DoughnutChart";
import React from "react";

import NextPatient from "./NextPatient";
import TodayAppointment from "./TodayAppointment";
import BasicSummary from "./BasicSummary";
const DoctorDashboard = () => {
  return (
    <div className="p-3 h-full overflow-y-auto">
      {" "}
      <h1 className="text-xl rounded-md  font-bold text-center mb-2 text-white bg-blue-500 p-2">
        Doctor Dashboard{" "}
      </h1>
      <hr />
      <BasicSummary></BasicSummary>
      <div className="w-full  grid gap-10 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3  p-2 bg-slate-50  my-10 rounded-md place-items-center ">
        
        <div className=" w-64 xs:w-80 sm:w-96  p-5 h-full flex flex-col tems-center rounded-md justify-center">
          <h1 className="text-center font-semibold text-sm mb-8">
            Patient Summary, <span className="text-blue-500">{"Decembar"}</span>
          </h1>
          <DoughnutChart></DoughnutChart>
        </div>

        <div className=" w-64 xs:w-80 sm:w-96 ">
          <TodayAppointment></TodayAppointment>
        </div>

        <div className="w-64 xs:w-80 sm:w-96">
          <NextPatient></NextPatient>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
