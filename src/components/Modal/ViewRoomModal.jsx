import React from "react";
import { getRoomById } from "../../utils";
import { useStateValue } from "../../context/stateProvider";

const ViewRoomModal = ({ id }) => {
  const [{ rooms }, dispatch] = useStateValue();
  const room = getRoomById(rooms, id);
  console.log(room);
  const { image, price, status, desc, maxPeople, roomNumber } = room;
  return (
    <div className="flex justify-center px-10 py-10">
      <article>
        <img src={image} alt="Room" />
      </article>
      <article className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-lg">Room Description</h3>
        <p>{price}</p>
        <p>{status}</p>
        <p>{desc}</p>
        <p>{maxPeople}</p>
        <p>{roomNumber}</p>
      </article>
    </div>
  );
};

export default ViewRoomModal;
