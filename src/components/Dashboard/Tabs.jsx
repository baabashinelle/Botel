import React from 'react'
import { FaHotel, FaGlobeAfrica, FaRestroom } from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";

const Tabs = () => {
  return (
    <section className="md:flex grid grid-cols-2 gap-y-6 md:gap-y-0 gap-x-6 md:p-[2em] p-[1rem] font-text justify-center items-center">
      <article className="flex flex-col gap-3 shrink-0 bg-white flex-1 px-[2.5em] py-[1.3em] items-center rounded-lg ">
        <div className="bg-[#ffe3d4] p-3 rounded-lg text-[#ba5e2d]">
          <FaHotel />
        </div>
        <p className="font-extrabold text-lg">10</p>
        <p className="text-center">Hotels</p>
      </article>
      <article className="flex flex-col gap-3 shrink-0 bg-white flex-1 px-[2.5em] py-[1.3em] items-center rounded-lg">
        <div className="bg-green-100 text-green-700 p-3 rounded-lg">
          <FaGlobeAfrica />
        </div>
        <p className="font-extrabold text-lg">11</p>
        <p className="text-center">Countries</p>
      </article>
      <article className="flex flex-col gap-3 shrink-0 bg-white flex-1 px-[2.5em] py-[1.3em] items-center rounded-lg">
        <div className="bg-blue-100 text-blue-700 p-3 rounded-lg">
          <FaRestroom />
        </div>
        <p className="font-extrabold text-lg">11</p>
        <p className="text-center">Rooms</p>
      </article>
      <article className="flex flex-col gap-3 shrink-0 bg-white flex-1 px-[2.5em] py-[1.3em] items-center rounded-lg">
        <div className="bg-red-100 text-red-700 p-3 rounded-lg">
          <MdOutlineTour />
        </div>
        <p className="font-extrabold text-lg">11</p>
        <p className="text-center"> Tours</p>
      </article>
    </section>
  );
}

export default Tabs