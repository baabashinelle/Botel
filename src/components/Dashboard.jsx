import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import DashboardNav from "./DashboardNav";
import { useStateValue } from "../context/stateProvider";
import { FETCH_DATA } from "../utils";


const Dashboard = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const handleClick = () => {
    setShowSideBar(!showSideBar);
  }

  const [{}, disaptch] = useStateValue();
  useEffect(() => {
    FETCH_DATA("hotels", (data) => {
      //to get actual hotels
      console.log("hotels", data.data);
      // store it in context state
      disaptch({
        type: "SET_HOTELS", // this is the action type to store hotels in /context/reducer.js
        hotels: data.data, // now set hotels to data.data from the api
      });
    });
    FETCH_DATA("rooms", (data) => {
      //to get actual rooms
      console.log("rooms", data.data);
      // store it in context state
      disaptch({
        type: "SET_ROOMS", // this is the action type to store rooms in /context/reducer.js
        rooms: data.data, // now set hotels to data.data from the api
      });
    });

    // So in this useEffect Hook,
    // we have fetched all rooms and hotels and dispatched the data to our context state. It is now avaiilable to use in all compnents without fetching from the API again.
  }, []);
  return (
    <main className="flex h-screen justify-between">
       <SideBar showSideBar={showSideBar}/>
      <div className="flex flex-col w-full bg-gray-100 min-h-[100vh] overflow-auto">
        <DashboardNav handleClick={handleClick} showSideBar={showSideBar} />
        {children}
      </div>
    </main>
  );
};

export default Dashboard;
