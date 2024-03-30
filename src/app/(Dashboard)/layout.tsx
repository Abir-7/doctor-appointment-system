import React, { ReactNode } from "react";
import SideNav from "../Component/Dashboard/SideNav";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[240px] h-full md:w-[300px] overflow-hidden border px-1 py-2">
        <div className="w-[100%]  flex flex-col items-center gap-3  h-[100%] overflow-y-auto">
          <SideNav></SideNav>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
