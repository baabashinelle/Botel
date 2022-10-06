import React from "react";
import SideBar from "../components/SideBar";
import DashboardNav from "../components/DashboardNav"

const Dashboard = () => {
  return (
    <main className="flex h-screen items-start overflow-hidden">
      <SideBar />
      <DashboardNav />
    </main>
  );
};

export default Dashboard;
