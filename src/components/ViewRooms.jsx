import React from 'react'
import RoomItems from "../utils/roomsTable";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";


const RoomItem = ({ hotelImg, name, country, status }) => (
  <article className="flex justify-between items-center py-[1em] border-b-2 ">
    <div className="flex items-center gap-6 w-[20%]">
      <img src={hotelImg} className="w-[5rem] h-[5rem] rounded-md" />
      <div>
        <h3 className="w-[20ch] font-bold">{name}</h3>
        <p className="text-xs text-gray-400">{country}</p>
      </div>
    </div>
    <div className="text-gray-500">{status}</div>
    <div className="flex gap-4 cursor-pointer">
      <AiOutlineEye className="hover:text-gray-600 hover:scale-125" />
      <AiOutlineEdit className="hover:text-gray-600 hover:scale-125" />
      <AiOutlineDelete className="hover:text-gray-600 hover:scale-125" />
    </div>
  </article>
);


const ViewRooms = () => {
  return (
    <div className="flex flex-col justify-center bg-white font-text px-[2em] py-[1em] m-[2em] rounded-lg">
      <h1 className="border-b-2 font-bold text-lg pb-[0.8em]">All Rooms</h1>
      {RoomItems.map((item, index) => (
        <RoomItem
          hotelImg={item.hotelImg}
          name={item.name}
          country={item.country}
          status={item.status}
          key={index}
        />
      ))}
    </div>
  );
}

export default ViewRooms