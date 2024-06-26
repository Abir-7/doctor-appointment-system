"use client";
import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";
import LoginButtton from "./LoginButtton";
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";

const Navbar = () => {

  const {email,firstName,lastName,mobile,role,userLoading,isVerified} = useSelector((state: RootState) => state.userInfo)

  const navAction = () => {
    const mobileNav = document.getElementById("mobileNavLink");
    mobileNav?.classList.toggle("hidden");
  };

  const [scrollY, setScrollY] = useState(false);

  const handleScroll = () => {
    if (window.scrollY == 0) {
      setScrollY(false);
    }
    if (window.scrollY > 150) {
      setScrollY(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);




  return (
    <div
      id="navbar"
      className={
        scrollY
          ? `${styles.navBar} rounded-b-full flex z-[200] bg-blue-500 gap-10 duration-500 shadow-lg justify-between h-[60px] items-center px-2 md:px-16 `
          : ` gap-10 relative rounded-b-full duration-500 shadow  flex bg-blue-500 justify-between h-[60px] items-center px-2 md:px-16 z-[200]`
      }
    >
      <div>
        <h1 className="text-4xl font-bold text-white  ms-7 md:ms-0">LOGO</h1>
      </div>
      <div className={` hidden  md:flex items-center gap-6 lg:gap-10`}>
        <ul className="md:flex  lg:gap-5">
          <NavLinks  isVerified={isVerified} userLoading={userLoading} role={role} navAction={navAction}></NavLinks>
        </ul>
        <div className="h-[full] flex items-center">
        <LoginButtton isVerified={isVerified} userLoading={userLoading}></LoginButtton>
        </div>
      </div>
      <div className="block md:hidden relative me-7 md:me-0  ">
        <div onClick={navAction} className=" text-2xl text-white ">
          <IoMdMenu />
        </div>
        <div
          id="mobileNavLink"
          className=" bg-blue-500 absolute hidden min-w-[120px] text-center mt-6 shadow-md rounded-md  z-[500] right-0 p-2"
        >
          <ul className="grid gap-1 ">
            <NavLinks role={role}  isVerified={isVerified} userLoading={userLoading} navAction={navAction}></NavLinks>
          </ul>
          <div className="mt-2 flex">
            <LoginButtton isVerified={isVerified} userLoading={userLoading}></LoginButtton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
