"use client";
import Link from "next/link";
import React, { useEffect } from "react";

interface NavbarProps {
  navAction: () => void;
  userLoading:boolean,
  isVerified:boolean
  role:string
}



const NavLinks = ({ navAction,userLoading,isVerified ,role}: NavbarProps) => {
  return (
    <>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-blue-500 text-white"
      >
        <Link href={"/"}> Home</Link>
      </li>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-blue-500 text-white"
      >
        <Link className="text-nowrap" href={"/OurDoctors"}>Our Doctors</Link>
      </li>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-blue-500 text-white"
      >
        Contact
      </li>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-blue-500 text-white"
      >
        {
          (isVerified && role=='admin')&&
          <Link href={"/AdminDashboard"}>Dashboard</Link>
          }
            {
          (isVerified && role=='doctor')&&
          <Link href={"/DoctorDashboard"}>Dashboard</Link>
          }
                  {
          (isVerified && role=='user')&&
          <Link href={"/PatientDashboard"}>Dashboard</Link>
          }
      </li>
    </>
  );
};

export default NavLinks;
