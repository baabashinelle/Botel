import React from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardIllustration from "../components/Dashboard/DashboardIllustration";
import Tabs from "../components/Dashboard/Tabs";

const DashboardHome = () => {
  return (
    <Dashboard>
      <Tabs />
      <DashboardIllustration/>
    </Dashboard>
  );
};

export default DashboardHome;
