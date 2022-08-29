import React from 'react'
import { HiLocationMarker } from "react-icons/hi"
import hotelFour from "../assets/hotel4.png";
import hotelTwo from "../assets/hotel2.png";
import hotelThree from "../assets/hotel3.png";
import hotelOne from "../assets/hotel1.png";
import star from "../assets/review-star.png";

const Hotels = () => {
  return (
    <section className="grid grid-cols-4 gap-6 font-text">
      <article>
        <img src={hotelFour} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md">
          <div className="flex justify-between pb-2">
            <h4 className="font-bold text-lg">Madrid</h4>
            <div className="flex items-center gap-2">
              <img src={star} alt="star icon" />
              <span className="text-text-light">4.8</span>
            </div>
          </div>
          <div className="flex justify-between text-text-light">
            <p className="flex items-center gap-[0.1rem]">
              <HiLocationMarker /> Spain
            </p>
            <p className="flex gap-2 items-center">
              <span className="line-through">$950</span>
              <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
                $850
              </span>
            </p>
          </div>
        </div>
      </article>
      <article>
        <img src={hotelTwo} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md">
          <div className="flex justify-between pb-2">
            <h4 className="font-bold text-lg">Paris</h4>
            <div className="flex items-center gap-2">
              <img src={star} alt="star icon" />
              <span className="text-text-light">4.8</span>
            </div>
          </div>
          <div className="flex justify-between text-text-light">
            <p className="flex items-center gap-[0.1rem]">
              <HiLocationMarker /> France
            </p>
            <p className="flex gap-2 items-center">
              <span className="line-through">$950</span>
              <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
                $850
              </span>
            </p>
          </div>
        </div>
      </article>
      <article>
        <img src={hotelOne} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md">
          <div className="flex justify-between pb-2">
            <h4 className="font-bold text-lg">Firenze</h4>
            <div className="flex items-center gap-2">
              <img src={star} alt="star icon" />
              <span className="text-text-light">4.8</span>
            </div>
          </div>
          <div className="flex justify-between text-text-light">
            <p className="flex items-center gap-[0.1rem]">
              <HiLocationMarker /> Italy
            </p>
            <p className="flex gap-2 items-center">
              <span className="line-through">$950</span>
              <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
                $850
              </span>
            </p>
          </div>
        </div>
      </article>
      <article>
        <img src={hotelThree} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md">
          <div className="flex justify-between pb-2">
            <h4 className="font-bold text-lg">London</h4>
            <div className="flex items-center gap-2">
              <img src={star} alt="star icon" />
              <span className="text-text-light">4.8</span>
            </div>
          </div>
          <div className="flex justify-between text-text-light">
            <p className="flex items-center gap-[0.1rem]">
              <HiLocationMarker /> UK
            </p>
            <p className="flex gap-2 items-center">
              <span className="line-through">$950</span>
              <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
                $850
              </span>
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Hotels