import React from "react";
import logo from "../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineEye, AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

const SideBar = ({ showSideBar, handleClick }) => {
  const { pathname } = useLocation();
  return (
    <>
      <section className="w-[20%] min-h-screen lg:flex flex-col items-center font-text p-5 shadow-sm hidden">
        {/*logo*/}
        <article className="flex justify-center items-center gap-2 w-full mb-[6rem] pt-2">
          <h3 className="text-2xl font-bold font-header">
            <Link to="/">Botel</Link>
          </h3>
          <div>
            <img src={logo} alt="Botel Logo" />
          </div>
        </article>
        <article className="flex flex-col justify-between h-[70vh]">
          <ul className="gap-5 flex flex-col text-[#5a3f31] text-lg">
            <li
              className={`${
                pathname == "/dashboardhome" ? "bg-[#ffe3d4]" : null
              } px-8 py-2 rounded-md`}
            >
              <div className="flex items-center gap-4 cursor-pointer">
                <AiOutlineHome />
                <Link to={"/dashboardhome"}>Dashboard</Link>
              </div>
            </li>
            <li
              className={`${
                pathname == "/viewrooms" ? "bg-[#ffe3d4]" : null
              } px-8 py-2 rounded-md`}
            >
              <div className="flex items-center gap-4 cursor-pointer whitespace-nowrap">
                <AiOutlineEye />
                <Link to={"/viewrooms"}>View Rooms</Link>
              </div>
            </li>
            <li
              className={`${
                pathname == "/viewhotels" ? "bg-[#ffe3d4]" : null
              } px-8 py-2 rounded-md`}
            >
              <div className="flex items-center gap-4 cursor-pointer whitespace-nowrap">
                <AiOutlineEye />
                <Link to={"/viewhotels"}>View Hotels</Link>
              </div>
            </li>
          </ul>
          <div>
            <button className="bg-primary-o text-white rounded-md px-8 py-2 text-lg w-full">
              <Link to="/" className="flex items-center justify-center gap-4">
                <FiLogOut /> Logout
              </Link>
            </button>
          </div>
        </article>
      </section>

      {/* for mobile screens */}
      {showSideBar && (
        <section className="w-full fixed bg-white z-20 min-h-screen flex flex-col items-center font-text p-5 shadow-sm lg:hidden">
          {/*logo*/}
          <article className="flex justify-between items-center gap-2 w-full mb-[6rem] pt-2">
            <h3 className="text-2xl font-bold font-header flex items-center gap-2">
              <Link to="/">Botel</Link>
              <img src={logo} alt="Botel Logo" />
            </h3>
            <div className="text-lg">
              <AiOutlineClose onClick={handleClick}/>
            </div>
          </article>
          <article className="flex flex-col justify-between h-[70vh]">
            <ul className="gap-5 flex flex-col text-[#5a3f31] text-lg">
              <li
                className={`${
                  pathname == "/dashboardhome" ? "bg-[#ffe3d4]" : null
                } px-8 py-2 rounded-md`}
              >
                <div className="flex items-center gap-4 cursor-pointer">
                  <AiOutlineHome />
                  <Link to={"/dashboardhome"}>Dashboard</Link>
                </div>
              </li>
              <li
                className={`${
                  pathname == "/viewrooms" ? "bg-[#ffe3d4]" : null
                } px-8 py-2 rounded-md`}
              >
                <div className="flex items-center gap-4 cursor-pointer whitespace-nowrap">
                  <AiOutlineEye />
                  <Link to={"/viewrooms"}>View Rooms</Link>
                </div>
              </li>
              <li
                className={`${
                  pathname == "/viewhotels" ? "bg-[#ffe3d4]" : null
                } px-8 py-2 rounded-md`}
              >
                <div className="flex items-center gap-4 cursor-pointer whitespace-nowrap">
                  <AiOutlineEye />
                  <Link to={"/viewhotels"}>View Hotels</Link>
                </div>
              </li>
            </ul>
            <div>
              <button className="bg-primary-o text-white rounded-md px-8 py-2 text-lg w-full">
                <Link to="/" className="flex items-center justify-center gap-4">
                  <FiLogOut /> Logout
                </Link>
              </button>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default SideBar;
