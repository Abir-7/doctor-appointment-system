"use client";
import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import NavLinks from "./NavLinks";
import styles from './Navbar.module.css'
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
    <div id="navbar" className={scrollY?` ${styles.navBar} flex z-50 bg-red-600 justify-between h-[60px] items-center px-2 md:px-20`:` flex bg-red-600 justify-between h-[60px] items-center px-2 md:px-20 z-50 `}>
      <div>
        <h1 className="text-4xl font-bold text-white">LOGO</h1>
      </div>
      <div className={` hidden md:flex items-center gap-20 `}>
        <ul className="md:flex gap-5">
          <NavLinks navAction={navAction}></NavLinks>
        </ul>
        <div className="h-[full] flex items-center">
          <button className="bg-white px-3 py-2 text-red-500 font-bold rounded-lg">
            Login
          </button>
        </div>
      </div>
      <div className="block md:hidden relative  ">
        <div onClick={navAction} className=" text-2xl text-white ">
          <IoMdMenu/>
        </div>
        <div
          id="mobileNavLink"
          className=" bg-red-600 absolute hidden min-w-[120px] text-center mt-6 shadow-md rounded-md  z-[500] right-0 p-2"
        >
          <ul className="grid gap-1 ">
            <NavLinks navAction={navAction}></NavLinks>
          </ul>
          <button
            onClick={() => {
              navAction();
            }}
            className="bg-red-500 w-full py-2 mt-1 rounded-lg text-white active:scale-[.9] duration-500 hover:bg-red-600"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
