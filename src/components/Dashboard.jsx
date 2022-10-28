import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardNav from "./DashboardNav";


const Dashboard = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const handleClick = () => {
    setShowSideBar(!showSideBar);
  }

  return (
    <main className="flex h-screen items-start overflow-hidden">
      {showSideBar && <SideBar />}
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh]">
        <DashboardNav handleClick={handleClick}/>
        {children}
      </div>
    </main>
  );
};

export default Dashboard;
