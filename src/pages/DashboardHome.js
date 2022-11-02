import React from "react";
import Dashboard from "../components/Dashboard";
import DashboardIllustration from "../components/DashboardIllustration";
import Tabs from "../components/Tabs";

const DashboardHome = () => {
  return (
    <Dashboard>
      <Tabs />
      <DashboardIllustration/>
    </Dashboard>
  );
};

export default DashboardHome;
