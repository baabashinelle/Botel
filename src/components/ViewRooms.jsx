import React, { useState } from "react";
import RoomItems from "../utils/roomsTable";
import Modal from "./Modal";
import ViewModalDesign from "./ViewModalDesign";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineBookmarkAdded } from "react-icons/md";
import Dashboard from "../components/Dashboard";

const RoomItem = ({ roomImg, name, country, status }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenView, setIsOpenView] = useState(false);
  const [isOpenBook, setIsOpenBook] = useState(false);
  

  return (
    <article className="flex justify-between items-center py-[1em] border-b-2 ">
      <div className="flex items-center gap-6 w-[20%]">
        <img src={roomImg} className="w-[5rem] h-[5rem] rounded-md" />
        <div>
          <h3 className="w-[20ch] font-bold">{name}</h3>
          <p className="text-xs text-gray-400">{country}</p>
        </div>
      </div>
      <div>
        {status == "Available" ? (
          <div className="bg-green-200 text-green-700 py-1 px-3">{status}</div>
        ) : (
          <div className="bg-red-200 text-red-700 py-1 px-3">{status}</div>
        )}
      </div>
      <div className="flex gap-4 cursor-pointer">
        {isOpenView && (
          <Modal
            isOpen={isOpenView}
            handleCloseModal={() => setIsOpenView(false)}
            Design={ViewModalDesign}
          />
        )}

        <AiOutlineEye
          onClick={() => setIsOpenView(true)}
          className="hover:text-gray-600 hover:scale-125"
        />
        <MdOutlineBookmarkAdded
          onClick={() => setIsOpenView(true)}
          className="hover:text-gray-600 hover:scale-125"
        />
      </div>
    </article>
  );
};

const ViewRooms = () => {
  return (
    <Dashboard>
      <div className="flex flex-col justify-center bg-white font-text px-[2em] py-[1em] m-[2em] rounded-lg">
        <h1 className="border-b-2 font-bold text-lg pb-[0.8em]">All Rooms</h1>
        {RoomItems.map((item, index) => (
          <RoomItem
            roomImg={item.roomImg}
            name={item.name}
            country={item.country}
            status={item.status}
            key={index}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default ViewRooms;
