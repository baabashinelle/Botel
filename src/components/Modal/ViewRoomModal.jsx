import React from "react";
import { getRoomById } from "../../utils";
import { useStateValue } from "../../context/stateProvider";

const ViewRoomModal = ({ id }) => {
  const [{ rooms }, dispatch] = useStateValue();
  const room = getRoomById(rooms, id);
  console.log(room);
  const { image, price, status, desc, maxPeople, roomNumber } = room;
  return (
    <div className="flex flex-col justify-center px-10 py-10">
      <article>
        <img src={image} alt="Room" />
      </article>
      <article className="flex flex-col gap-2 pt-5">
        <div className="flex justify-between">
          <p>
            <span className="bg-[#ffe3d4] text-primary-o px-2 mr-3">Price</span>
            {price.toFixed(2)}
          </p>
          <p>
            <span className="bg-[#ffe3d4] text-primary-o px-2 mr-3">
              Status
            </span>
            {status}
          </p>
        </div>
        <div className="flex justify-between">
          <p>
            <span className="bg-[#ffe3d4] text-primary-o px-2 mr-3">
              Maximum People
            </span>
            {maxPeople}
          </p>
          <p>
            <span className="bg-[#ffe3d4] text-primary-o px-2 mr-3">
              Room Number
            </span>
            {roomNumber}
          </p>
        </div>
        <h3 className="font-bold text-lg pt-3">Room Description</h3>
        <p>{desc}</p>
      </article>
    </div>
  );
};

export default ViewRoomModal;
