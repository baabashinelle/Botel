import React, { useState, useEffect } from "react";
import { useStateValue } from "../../context/stateProvider";
import Modal from "../Modal/Modal";
import ViewRoomModal from "../Modal/ViewRoomModal";
import BookRoomModal from "../Modal/BookRoomModal";
import { AiOutlineEye } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import Dashboard from "../../components/Dashboard/Dashboard";
import { getHotelName } from "../../utils";
import Preloader from "../Preloader";

const RoomItem = ({ roomImg, price, status, roomid }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  const [isOpenView, setIsOpenView] = useState(false);
  const [isOpenBook, setIsOpenBook] = useState(false);
  const [{ hotels }, dispatch] = useStateValue();

  return (
    <article className="flex justify-between items-center py-[1em] md:border-b-2 md:border-t-0 border-t-2 w-max md:w-full gap-14">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div className="flex items-center gap-6 w-min md:w-[20%] overflow-visible md:overflow-visible">
            <img src={roomImg} className="w-[5rem] h-[5rem] rounded-md" />
            <div>
              <h3 className="w-[20ch] font-bold">
                {getHotelName(roomid, hotels)}
              </h3>
              <p className="text-xs text-gray-400 inline">Price: {price}</p>
            </div>
          </div>
          <div>
            {status == "Available" ? (
              <div className="bg-green-200 text-green-700 py-1 px-6">
                {status}
              </div>
            ) : (
              <div className="bg-red-200 text-red-700 py-1 px-3">{status}</div>
            )}
          </div>
          <div className="flex gap-4 cursor-pointer">
            {isOpenView && (
              <Modal
                isOpen={isOpenView}
                handleCloseModal={() => setIsOpenView(false)}
                Design={ViewRoomModal}
              />
            )}

            {isOpenBook && (
              <Modal
                isOpen={isOpenBook}
                handleCloseModal={() => setIsOpenBook(false)}
                Design={BookRoomModal}
              />
            )}
            <AiOutlineEye
              onClick={() => setIsOpenView(true)}
              className="hover:text-gray-600 hover:scale-125"
            />
            <FiBookmark
              onClick={() => setIsOpenBook(true)}
              className="hover:text-gray-600 hover:scale-125"
            />
          </div>
        </>
      )}
    </article>
  );
};

const ViewRooms = () => {
  const [{ rooms }, dispatch] = useStateValue();
  return (
    <Dashboard>
      <div className="flex flex-col justify-center bg-white font-text px-[2em] py-[1em] md:m-[2em] m-[1rem] rounded-lg overflow-scroll md:overflow-visible">
        <h1 className="md:border-b-2 font-bold text-lg pb-[0.8em] mt-[23rem] md:mt-0">
          All Rooms
        </h1>
        {rooms.map((room, index) => (
          <RoomItem
            roomImg={room.image}
            price={room.price}
            status={room.status}
            roomid={room._id}
            key={index}
          />
        ))}
      </div>
    </Dashboard>
  );
};

export default ViewRooms;
