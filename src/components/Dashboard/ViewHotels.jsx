import React, { useState, useEffect } from "react";
import { useStateValue } from "../../context/stateProvider";
import Modal from "../Modal/Modal";
import ViewHotelModal from "../Modal/ViewHotelModal";
import { AiOutlineEye } from "react-icons/ai";
import Dashboard from "../Dashboard/Dashboard";
import Preloader from "../Preloader";

const HotelItem = ({ hotelImg, name, country, city, status, hotelid }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const [isOpenView, setIsOpenView] = useState(false);
  
  return (
    <article className="flex justify-between items-center py-[1em] md:border-b-2 md:border-t-0 border-t-2 w-max md:w-full gap-14">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="flex items-center gap-6 w-min md:w-[20%]">
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
              <div className="bg-green-200 text-green-700  py-1 px-6">
                {status}
              </div>
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
                Design={<ViewHotelModal id={hotelid}/>}
              />
            )}

            <AiOutlineEye className="text-gray-700" />
            <span className="text-gray-700">view</span>
          </div>
        </>
      )}
    </article>
  );
};

const ViewHotels = () => {
  const [{ hotels }, dispatch] = useStateValue();
  return (
    <Dashboard>
      <div className="flex flex-col justify-center bg-white font-text px-[2em] py-[1em] m-[2em] rounded-lg overflow-scroll md:overflow-visible">
        <h1 className="md:border-b-2 font-bold text-lg pb-[0.8em] mt-[10rem] md:mt-0">
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
            hotelid={hotel._id}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default ViewHotels;
