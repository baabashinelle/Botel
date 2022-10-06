import React from "react";
import SideBar from "../components/SideBar";
import DashboardNav from "../components/DashboardNav"
import Tabs from "../components/Tabs";

const Dashboard = () => {
  return (
    <main className="flex h-screen items-start overflow-hidden">
      <SideBar />
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh]">
        <DashboardNav />
        <Tabs />
      </div>
    </main>
  );
};

export default Dashboard;
