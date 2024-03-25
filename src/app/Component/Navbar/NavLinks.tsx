"use client";
import Link from "next/link";
import React, { useEffect } from "react";

interface NavbarProps {
  navAction: () => void;
}

const NavLinks = ({ navAction }: NavbarProps) => {
  return (
    <>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-blue-500 text-white"
      >
       <Link href={'/'}> Home</Link>
      </li>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-blue-500 text-white"
      >
  <Link href={'/OurDoctors'}>Our Doctors</Link>
      </li>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-blue-500 text-white"
      >
        Contact
      </li>

    </>
  );
};

export default NavLinks;
