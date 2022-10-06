import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAddBusiness } from "react-icons/md";
import { GrOverview } from "react-icons/gr";

const Dashboard = () => {
  return (
    <section className="w-[20%] bg-red-300 min-h-screen flex flex-col items-center font-text p-5 shadow-sm">
      {/*logo*/}
      <article className="flex justify-center items-center gap-2 w-full mb-[6rem]">
        <h3 className="text-2xl font-bold font-header">Botel</h3>
        <div>
          <img src={logo} alt="Botel Logo" />
        </div>
      </article>
      <article>
        <ul className="gap-5 flex flex-col">
          <Link className="flex items-center gap-4">
            <AiOutlineHome />
            Dashboard
          </Link>
          <Link className="flex items-center gap-4">
            <MdOutlineAddBusiness />
            Add Hotels
          </Link>
          <Link className="flex items-center gap-4">
            <GrOverview />
            View Hotels
          </Link>
        </ul>
      </article>
    </section>
  );
};

export default Dashboard;
