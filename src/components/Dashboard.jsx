import React, { useState } from "react";
import SideBar from "./SideBar";
import DashboardNav from "./DashboardNav";
import Tabs from "./Tabs";

const Dashboard = ({ children }) => {
  return (
    <main className="flex h-screen items-start overflow-hidden">
      <SideBar />
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh]">
        <DashboardNav />
        {children}
      </div>
    </main>
  );
};

export default Dashboard;
