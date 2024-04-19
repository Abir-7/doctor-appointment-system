import React from "react";
import AdminBarChart from "./AdminBarChart";
import MostAppointmentChart from "./MostAppointmentChart";

const AdminDashboard = () => {
  return (
    <div className="p-3 h-full">
      <h1 className="text-xl rounded-md  font-bold text-center mb-2 text-white bg-blue-500 p-2">
        Admin Dashboard{" "}
      </h1>
      <hr />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="">
          <AdminBarChart></AdminBarChart>
        </div>
        <div className="mx-auto">
          <MostAppointmentChart></MostAppointmentChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
