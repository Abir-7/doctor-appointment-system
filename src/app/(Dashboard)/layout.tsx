'use client'

import styles from './layout.module.css'

import SideNav from "./SideNav";
import { ReactNode } from 'react';
import SideNavActiveButton from './SideNavActiveButton';
const DashboardLayout = ({ children }: { children: ReactNode }) => {





  const activeSideNav= ()=>{
    console.log('hit')
    const sideNav=document.getElementById('sideNav')
    console.log(sideNav)
    sideNav?.classList.toggle(`${styles.active}`)
  }



  return (
    <div className={`flex h-screen w-full ${styles.dashboardContainer}`}>
      <div id='sideNav' className={`w-[250px] md:w-[300px]  flex-shrink-0 h-full  overflow-hidden border px-1 py-2 ${styles.sideNav}  bg-white `}>
    <div className="relative  bg-red-200  w-full "></div>
        <div onClick={activeSideNav} className={`md:w-[296px] w-[236px]  flex flex-col items-center gap-3  h-[100%] overflow-y-auto ${styles.sideNavContent} `}>
          <SideNav></SideNav>
        </div>
      </div>
      <div className="w-full h-screen overflow-hidden relative ">
      <div  className="absolute z-100 bg-blue-500 p-2 rounded-full left-5 top-[18px]">
        <SideNavActiveButton activeSideNave={activeSideNav}></SideNavActiveButton>
        </div>
      
        {children}</div>
    </div>
  );
};

export default DashboardLayout;
