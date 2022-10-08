import React, { useState } from "react";
import SideBar from "../components/SideBar";
import DashboardNav from "../components/DashboardNav";
import Tabs from "../components/Tabs";

const Dashboard = () => {
  const [page, setPage] = useState(<Tabs />);
  return (
    <main className="flex h-screen items-start overflow-hidden">
      <SideBar setPage={setPage} />
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh]">
        <DashboardNav />
        {page}
      </div>
    </main>
  );
};

export default Dashboard;
