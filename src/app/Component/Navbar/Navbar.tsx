"use client";
import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import NavLinks from "./NavLinks";
import styles from './Navbar.module.css'
import LoginButtton from "./LoginButtton";
const Navbar = () => {

  const navAction = () => {
    const mobileNav = document.getElementById("mobileNavLink");
    mobileNav?.classList.toggle("hidden");
  };


  const [scrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    if(window.scrollY==0){
        setScrollY(false)
    }
    if(window.scrollY>150){
        setScrollY(true)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(scrollY)
  return (
    <div id="navbar" className={scrollY?` ${styles.navBar} rounded-b-full flex z-[200] bg-blue-500 justify-between h-[60px] items-center px-2 md:px-20`:`relative rounded-b-full flex bg-blue-500 justify-between h-[60px] items-center px-2 md:px-20 z-[500] `}>
      <div>
        <h1 className="text-4xl font-bold text-white  ms-7 md:ms-0">LOGO</h1>
      </div>
      <div className={` hidden md:flex items-center gap-20 `}>
        <ul className="md:flex gap-5">
          <NavLinks navAction={navAction}></NavLinks>
        </ul>
        <div className="h-[full] flex items-center">
        <LoginButtton></LoginButtton>
        </div>
      </div>
      <div className="block md:hidden relative me-7 md:me-0  ">
        <div onClick={navAction} className=" text-2xl text-white ">
          <IoMdMenu/>
        </div>
        <div
          id="mobileNavLink"
          className=" bg-blue-500 absolute hidden min-w-[120px] text-center mt-6 shadow-md rounded-md  z-[500] right-0 p-2"
        >
          <ul className="grid gap-1 ">
            <NavLinks navAction={navAction}></NavLinks>
          </ul>
    <LoginButtton></LoginButtton>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
