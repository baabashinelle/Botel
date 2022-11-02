import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/stateProvider";
import { FETCH_DATA } from "../utils";

const LoginPage = () => {
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
    <div className="flex items-center gap-16 h-screen overflow-y-hidden font-text bg-bg-c md:bg-none">
      <article className="w-5/6 bg-login bg-no-repeat bg-cover bg-center h-full md:block hidden"></article>
      <article className="flex justify-center w-full">
        <article className="flex flex-col gap-4 lg:w-1/2">
          <h1 className="text-4xl font-header font-bold">Login to Botel</h1>
          <label>Username</label>
          <input
            type="text"
            className="p-2 border-2 rounded-md focus:outline-none focus:border-2 focus:border-bg-o"
          ></input>
          <label>Password</label>
          <input
            type="password"
            className="p-2 border-2 rounded-md focus:outline-none focus:border-2 focus:border-bg-o"
          ></input>
          <button className="bg-primary-o text-white rounded-md py-3 mt-5">
            <Link to="/dashboardhome">Submit</Link>
          </button>
        </article>
      </article>
    </div>
  );
};

export default LoginPage;
