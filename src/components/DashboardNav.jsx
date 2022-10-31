import React from "react";
import avatarImg from "../assets/avatar.jpg";
import { AiOutlineBars } from "react-icons/ai";

const DashboardNav = ({ handleClick, showSideBar }) => {
  return (
    <nav className="w-full flex font-text text-lg py-4 px-6 justify-between md:justify-end items-center bg-white">
      <div className="text-lg md:hidden">
        <AiOutlineBars className="cursor-pointer" onClick={handleClick} />
      </div>
      <div className={`${showSideBar && "hidden"} flex items-center justify-center gap-3`}>
        <div>
          <div className="text-right flex-col flex items-end justify-center">
            <h3 className="font-extrabold">Howdy!</h3>
            <p className="text-sm text-gray-600">User</p>
          </div>
        </div>
        <div className="relative w-12 h-12">
          <img
            src={avatarImg}
            alt="admin"
            className="h-full w-full rounded-full"
            layout="fill"
          />
        </div>
      </div>
    </nav>
  );
};

export default DashboardNav;
