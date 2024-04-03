"use client";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DoctorSidenavLink from "../Component/Dashboard/Doctor_Component/DoctorSidenavLink";
import PatientSidenavLink from "../Component/Dashboard/Patient_Component/PatientSidenavLink";
import AdminSidenavLink from "../Component/Dashboard/Admin_Component/AdminSidenavLink";
const SideNav = () => {
  const [value, setvalue] = useState(0);

  const {
    email,
    firstName,
    lastName,
    mobile,
    role,
    userLoading,
    isVerified,
    specialist,
  } = useSelector((state: RootState) => state.userInfo);

  return (

    <div className="w-full">
      <div className="w-32 mt-3 mx-auto rounded-full bg-red-400 h-32"></div>
      <div className="text-center mt-2">
        <h1 className="font-semibold">Name</h1>
        <p className="text-sm">
          {specialist && specialist} {role == "user" && "Patient"}{" "}
        </p>
      </div>

      <div className="mt-5 grid gap-2 ">
        <Link
          onClick={() => setvalue(-1)}
          className={
            value == -1
              ? `w-full border border-blue-100 py-2 rounded-md px-5 bg-blue-500 text-white`
              : `w-full border border-blue-100 py-2 rounded-md px-5`
          }
          href={"/"}
        >
          Home
        </Link>

        {/* patient link */}

        {role == "user" && (
          <PatientSidenavLink
            setvalue={setvalue}
            value={value}
          ></PatientSidenavLink>
        )}

        {/* doctor link */}

        {role == "doctor" && (
          <DoctorSidenavLink
            setvalue={setvalue}
            value={value}
          ></DoctorSidenavLink>
        )}

        {/* Admin link */}

        {role == "admin" && (
          <AdminSidenavLink
            setvalue={setvalue}
            value={value}
          ></AdminSidenavLink>
        )}
      </div>
    </div>

  );
};

export default SideNav;
