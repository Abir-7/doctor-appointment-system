import Link from "next/link";
import React from "react";

interface Props {
  setvalue: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}

const AdminSidenavLink = ({ setvalue, value }: Props) => {
  return (
    <>
      <Link
        onClick={() => setvalue(0)}
        className={
          value == 0
            ? `w-full border border-blue-100 py-2 rounded-md px-5 bg-blue-500 text-white`
            : `w-full border border-blue-100 py-2 rounded-md px-5`
        }
        href={"/admin/AdminDashboard"}
      >
        Admin Dashboard
      </Link>

      <Link
        onClick={() => setvalue(1)}
        className={
          value == 1
            ? `w-full border border-blue-100 py-2 rounded-md px-5 bg-blue-500 text-white`
            : `w-full border border-blue-100 py-2 rounded-md px-5`
        }
        href={"/admin/AppointmentHistory"}
      >
        Appointment History
      </Link>

      <Link
        onClick={() => setvalue(2)}
        className={
          value == 2
            ? `w-full border border-blue-100 py-2 rounded-md px-5 bg-blue-500 text-white`
            : `w-full border border-blue-100 py-2 rounded-md px-5`
        }
        href={"/admin/AddDoctor"}
      >
        Add New Doctor
      </Link>

      <Link
        onClick={() => setvalue(3)}
        className={
          value == 3
            ? `w-full border border-blue-100 py-2 rounded-md px-5 bg-blue-500 text-white`
            : `w-full border border-blue-100 py-2 rounded-md px-5`
        }
        href={"/admin/DoctorList"}
      >
        All Doctors
      </Link>
    </>
  );
};

export default AdminSidenavLink;
