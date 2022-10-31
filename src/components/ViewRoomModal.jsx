import React from 'react'
import RoomImg from "../assets/room1.jpg";
import { useStateValue } from "../context/stateProvider";

const ViewRoomModal = () => {
  const [{ rooms }, dispatch] = useStateValue();
  return (
    <div className="flex flex-col justify-center px-10 py-10">
      <article>
        <img src={RoomImg} alt="Room" />
      </article>
      <article className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-lg">Room Description</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          tempore autem necessitatibus.
        </p>
      </article>
    </div>
  );
}

export default ViewRoomModal