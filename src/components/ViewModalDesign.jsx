import React from 'react'
import RoomImg from "../assets/room1.jpg";

const ViewModalDesign = () => {
  return (
    <div className="flex justify-center px-8 py-8 gap-8">
      <article>
        <img src={RoomImg} alt="Room" />
      </article>
      <article className="flex flex-col gap-3 mx-4">
        <h3 className='font-bold text-lg'>Description</h3>
        <p className='w-[18ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus tempore autem necessitatibus.</p>
      </article>
    </div>
  );
}

export default ViewModalDesign