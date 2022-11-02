import React from 'react'
import { Link } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const SearchSection = () => {
  return (
    <div className="flex md:flex-row flex-col justify-center items-center pb-[8rem]">
      <div
        className="bg-white flex md:flex-row flex-col justify-center items-center rounded-md font-text gap-20 lg:w-[55rem] md:w-[45rem] w-[15rem] py-6 md:px-4 lg:px-0 drop-shadow-xl"
      >
        <article>
          <div className="flex items-center">
            <h6 className="text-primary-b font-semibold">Location</h6>
            <MdOutlineKeyboardArrowDown className="text-primary-o text-xl" />
          </div>
          <p className="text-text-light text-sm pt-3">Where are you going</p>
        </article>
        <article>
          <div className="flex items-center">
            <h6 className="text-primary-b font-semibold">Date</h6>
            <MdOutlineKeyboardArrowDown className="text-primary-o text-xl" />
          </div>
          <p className="text-text-light text-sm pt-3">When you will go</p>
        </article>
        <article>
          <div className="flex items-center">
            <h6 className="text-primary-b font-semibold">Guest</h6>
            <MdOutlineKeyboardArrowDown className="text-primary-o text-xl" />
          </div>
          <p className="text-text-light text-sm pt-3">Number of guest</p>
        </article>
        <article>
          <button className="md:w-[10rem] p-3 font-text rounded-md text-white font-semibold bg-primary-o border-primary-o border-[1px] drop-shadow-xl explore-btn">
            <Link to="/login">Explore Now</Link>
          </button>
        </article>
      </div>
    </div>
  );
}

export default SearchSection