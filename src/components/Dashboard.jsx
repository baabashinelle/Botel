import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardNav from "./DashboardNav";


const Dashboard = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleClick = () => {
    setShowSideBar(!showSideBar);
  }

  return (
    <main className="flex h-screen justify-between">
       <SideBar showSideBar={showSideBar}/>
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh] overflow-auto">
        <DashboardNav handleClick={handleClick} />
        {children}
      </div>
    </main>
  );
};

export default Dashboard;
