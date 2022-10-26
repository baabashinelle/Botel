import React from "react";
import HotelData from "../utils/hotels";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import star from "../assets/review-star.png";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 3 },
};

const items = HotelData.map((hotel) => {
  return (
    <article
      className="relative cursor-pointer hover:shadow-2xl hover:shadow-[#ffe7db] hotel-card item w-full transition-all"
      data-value={`${hotel.value}`}
    >
      <img src={hotel.hotelImg} alt="Random Hotel"></img>
      <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md transition-all">
        <div className="flex justify-between pb-2">
          <h4 className="font-bold text-lg">{hotel.city}</h4>
          <div className="flex items-center gap-2">
            <img src={star} alt="star icon" />
            <span className="text-text-light">{hotel.rating}</span>
          </div>
        </div>
        <div className="flex justify-between text-text-light">
          <p className="flex items-center gap-[0.1rem]">
            <HiLocationMarker /> {hotel.country}
          </p>
          <p className="flex gap-2 items-center">
            <span className="line-through">{hotel.oldPrice}</span>
            <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
              {hotel.newPrice}
            </span>
          </p>
        </div>

        <button className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl absolute top-[50%] left-[25%] hotel-btn">
          <Link to="/login">Book Now</Link>
        </button>
      </div>
    </article>
  );
});
// const items = [
//   // <article
//   //   className="hover:shadow-2xl cursor-pointer hover:shadow-[#ffe7db] item w-full transition-all"
//   //   data-value="1"
//   // >
//   //   <img src={hotelFour} alt="Random Hotel"></img>
//   //   <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md">
//   //     <div className="flex justify-between pb-2">
//   //       <h4 className="font-bold text-lg">Madrid</h4>
//   //       <div className="flex items-center gap-2">
//   //         <img src={star} alt="star icon" />
//   //         <span className="text-text-light">4.8</span>
//   //       </div>
//   //     </div>
//   //     <div className="flex justify-between text-text-light">
//   //       <p className="flex items-center gap-[0.1rem]">
//   //         <HiLocationMarker /> Spain
//   //       </p>
//   //       <p className="flex gap-2 items-center">
//   //         <span className="line-through">$950</span>
//   //         <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
//   //           $850
//   //         </span>
//   //       </p>
//   //     </div>
//   //   </div>
//   // </article>,
//   // <article
//   //   className="relative cursor-pointer hover:shadow-2xl hover:shadow-[#ffe7db] hotel-card item w-full transition-all"
//   //   data-value="2"
//   // >
//   //   <img src={hotelTwo} alt="Random Hotel"></img>
//   //   <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md transition-all">
//   //     <div className="flex justify-between pb-2">
//   //       <h4 className="font-bold text-lg">Paris</h4>
//   //       <div className="flex items-center gap-2">
//   //         <img src={star} alt="star icon" />
//   //         <span className="text-text-light">4.8</span>
//   //       </div>
//   //     </div>
//   //     <div className="flex justify-between text-text-light">
//   //       <p className="flex items-center gap-[0.1rem]">
//   //         <HiLocationMarker /> France
//   //       </p>
//   //       <p className="flex gap-2 items-center">
//   //         <span className="line-through">$950</span>
//   //         <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
//   //           $850
//   //         </span>
//   //       </p>
//   //     </div>

//   //     <button className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl absolute top-[50%] left-[25%] hotel-btn">
//   //       Book Now
//   //     </button>
//   //   </div>
//   // </article>,
//   // <article
//   //   className="hover:shadow-2xl cursor-pointer hover:shadow-[#ffe7db] item w-full transition-all"
//   //   data-value="3"
//   // >
//   //   <img src={hotelFour} alt="Random Hotel"></img>
//   //   <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md">
//   //     <div className="flex justify-between pb-2">
//   //       <h4 className="font-bold text-lg">Firenze</h4>
//   //       <div className="flex items-center gap-2">
//   //         <img src={star} alt="star icon" />
//   //         <span className="text-text-light">4.8</span>
//   //       </div>
//   //     </div>
//   //     <div className="flex justify-between text-text-light">
//   //       <p className="flex items-center gap-[0.1rem]">
//   //         <HiLocationMarker /> Italy
//   //       </p>
//   //       <p className="flex gap-2 items-center">
//   //         <span className="line-through">$950</span>
//   //         <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
//   //           $850
//   //         </span>
//   //       </p>
//   //     </div>
//   //   </div>
//   // </article>,
//   // <article
//   //   className="hover:shadow-2xl cursor-pointer hover:shadow-[#ffe7db] item w-full transition-all"
//   //   data-value="4"
//   // >
//   //   <img src={hotelThree} alt="Random Hotel"></img>
//   //   <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md ">
//   //     <div className="flex justify-between pb-2">
//   //       <h4 className="font-bold text-lg">London</h4>
//   //       <div className="flex items-center gap-2">
//   //         <img src={star} alt="star icon" />
//   //         <span className="text-text-light">4.8</span>
//   //       </div>
//   //     </div>
//   //     <div className="flex justify-between text-text-light">
//   //       <p className="flex items-center gap-[0.1rem]">
//   //         <HiLocationMarker /> UK
//   //       </p>
//   //       <p className="flex gap-2 items-center">
//   //         <span className="line-through">$950</span>
//   //         <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
//   //           $850
//   //         </span>
//   //       </p>
//   //     </div>
//   //   </div>
//   // </article>,
//   // <article
//   //   className="hover:shadow-2xl cursor-pointer hover:shadow-[#ffe7db] item w-full transition-all"
//   //   data-value="1"
//   // >
//   //   <img src={hotelFour} alt="Random Hotel"></img>
//   //   <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md">
//   //     <div className="flex justify-between pb-2">
//   //       <h4 className="font-bold text-lg">Madrid</h4>
//   //       <div className="flex items-center gap-2">
//   //         <img src={star} alt="star icon" />
//   //         <span className="text-text-light">4.8</span>
//   //       </div>
//   //     </div>
//   //     <div className="flex justify-between text-text-light">
//   //       <p className="flex items-center gap-[0.1rem]">
//   //         <HiLocationMarker /> Spain
//   //       </p>
//   //       <p className="flex gap-2 items-center">
//   //         <span className="line-through">$950</span>
//   //         <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
//   //           $850
//   //         </span>
//   //       </p>
//   //     </div>
//   //   </div>
//   // </article>,

// ];

const Hotels = () => {
  return (
    <section className="grid gap-6 font-text deals-carousel overflow-hidden">
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive"
        renderPrevButton={() => {
          return (
            <article className="flex justify-center items-center">
              <div className="border-2 rounded-full text-gray-400 cursor-pointer w-8 h-8 flex justify-center items-center text-lg">
                <BsArrowLeftShort />
              </div>
            </article>
          );
        }}
        renderNextButton={() => {
          return (
            <article className="flex justify-center items-center">
              <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer w-8 h-8 flex justify-center items-center text-lg">
                <BsArrowRightShort />
              </div>
            </article>
          );
        }}
        disableDotsControls={true}
        swipeExtraPadding={0}
      />
    </section>
  );
};

export default Hotels;
