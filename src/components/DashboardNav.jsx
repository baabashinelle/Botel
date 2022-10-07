import React from 'react'
import avatarImg from "../assets/avatar.jpg";

const DashboardNav = () => {
  return (
    <nav className="w-full flex font-text text-lg py-4 px-6 justify-end items-center bg-white">
      <div className="flex items-center justify-center gap-3">
        <div className="text-right flex-col flex items-end justify-center">
          <h3 className="font-extrabold">Howdy!</h3>
          <p className="text-sm text-gray-600">User</p>
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
}

export default DashboardNav