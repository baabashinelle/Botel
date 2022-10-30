import React, { useState } from "react";
import { useStateValue } from "../context/stateProvider";
import Modal from "./Modal";
import ViewHotelModal from "./ViewHotelModal";
import { AiOutlineEye } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import Dashboard from "../components/Dashboard";

const HotelItem = ({ hotelImg, name, country, city, status }) => {
  const [isOpenView, setIsOpenView] = useState(false);
  
  return (
    <article className="flex justify-between items-center py-[1em] border-b-2 ">
      <div className="flex items-center gap-6 md:w-[20%]">
        <img src={hotelImg} className="w-[5rem] h-[5rem] rounded-md" />
        <div>
          <h3 className="font-bold w-[20ch]">{name}</h3>
          <p className="text-xs text-gray-400">
            {country}, {city}
          </p>
        </div>
      </div>
      <div>
        {status == "Available" ? (
          <div className="bg-green-200 text-green-700 py-1 px-3">{status}</div>
        ) : (
          <div className="bg-red-200 text-red-700 py-1 px-3">{status}</div>
        )}
      </div>
      <div
        className="flex gap-1 cursor-pointer items-center hover:scale-110 transition-all"
        onClick={() => setIsOpenView(true)}
      >
        {isOpenView && (
          <Modal
            isOpen={isOpenView}
            handleCloseModal={() => setIsOpenView(false)}
            Design={ViewHotelModal}
          />
        )}

        <AiOutlineEye className="text-gray-700" />
        <span className="text-gray-700">
          view
        </span>
      </div>
    </article>
  );
};

const ViewHotels = () => {
  const [{ hotels }, dispatch] = useStateValue();
  return (
    <Dashboard>
      <div className="flex flex-col justify-center bg-white font-text px-[2em] py-[1em] m-[2em] rounded-lg overflow-scroll md:overflow-visible">
        <h1 className="border-b-2 font-bold text-lg pb-[0.8em] pt-10 md:pt-0">
          All Hotels
        </h1>
        {hotels.map((hotel, index) => (
          <HotelItem
            hotelImg={hotel.image}
            name={hotel.name}
            country={hotel.country}
            city={hotel.city}
            status={hotel.status}
            key={index}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default ViewHotels;
