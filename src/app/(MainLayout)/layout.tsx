import React from "react";
import Navbar from "../Component/Navbar/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <div className="h-[200px] bg-blue-500">Footer</div>
    </div>
  );
};

export default MainLayout;
