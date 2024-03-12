"use client";
import React, { useEffect } from "react";

interface NavbarProps {
  navAction: () => void;
}

const NavLinks = ({ navAction }: NavbarProps) => {
  return (
    <>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-red-500 text-white"
      >
        Home
      </li>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-red-500 text-white"
      >
        Contact
      </li>
      <li
        onClick={navAction}
        className="hover:bg-white  px-3 py-1 duration-300 rounded-md hover:text-red-500 text-white"
      >
        About Us
      </li>
    </>
  );
};

export default NavLinks;
