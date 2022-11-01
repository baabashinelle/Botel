import React from "react";
import HotelData from "../utils/hotels";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import star from "../assets/review-star.png";

const HotelCarousel = ({
  city,
  hotelImg,
  rating,
  country,
  oldPrice,
  newPrice,
}) => {
  return (
    <article className="w-fit relative cursor-pointer hover:shadow-2xl hover:shadow-[#ffe7db] hotel-card transition-all">
      <img src={hotelImg} alt="Random Hotel"></img>
      <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md transition-all">
        <div className="flex justify-between pb-2">
          <h4 className="font-bold text-lg">{city}</h4>
          <div className="flex items-center gap-2">
            <img src={star} alt="star icon" />
            <span className="text-text-light">{rating}</span>
          </div>
        </div>
        <div className="flex justify-between text-text-light">
          <p className="flex items-center gap-[0.1rem]">
            <HiLocationMarker /> {country}
          </p>
          <p className="flex gap-2 items-center">
            <span className="line-through">{oldPrice}</span>
            <span className="text-primary-o font-bold bg-[#ffe7db] rounded-md p-1">
              {newPrice}
            </span>
          </p>
        </div>

        <button className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl absolute top-[50%] left-[25%] hotel-btn">
          <Link to="/login">Book Now</Link>
        </button>
      </div>
    </article>
  );
};

const Hotels = () => {
  return (
    <>
      <section className="font-text lg:flex justify-center items-center hidden desktop-crsl">
        <CarouselProvider isIntrinsicHeight={true} totalSlides={2}>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div className="grid md:grid-cols-carousel lg:gap-3 xl:gap-8 justify-center">
                {HotelData.map((item, index) => (
                  <HotelCarousel
                    hotelImg={item.hotelImg}
                    key={index}
                    city={item.city}
                    country={item.country}
                    rating={item.rating}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                  />
                ))}
              </div>
            </Slide>
            <Slide index={1}>
              <div className="grid md:grid-cols-carousel lg:gap-3 xl:gap-8 justify-center">
                {HotelData.map((item, index) => (
                  <HotelCarousel
                    hotelImg={item.hotelImg}
                    key={index}
                    city={item.city}
                    country={item.country}
                    rating={item.rating}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                  />
                ))}
              </div>
            </Slide>
          </Slider>
          <div className="flex justify-center gap-8 pt-10">
            <ButtonBack>
              <div className="border-2 rounded-full text-gray-400 cursor-pointer w-8 h-8 flex justify-center items-center text-3xl ">
                <BsArrowLeftShort />
              </div>
            </ButtonBack>
            <ButtonNext>
              <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer w-8 h-8 flex justify-center items-center text-3xl">
                <BsArrowRightShort />
              </div>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </section>

      {/* for mobile */}
      <section className="font-text lg:hidden flex justify-center items-center">
        <CarouselProvider isIntrinsicHeight={true} totalSlides={2}>
          <Slider>
            <Slide index={0} tabIndex="null">
              <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                {HotelData.map((item, index) => (
                  <HotelCarousel
                    hotelImg={item.hotelImg}
                    key={index}
                    city={item.city}
                    country={item.country}
                    rating={item.rating}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                  />
                ))}
              </div>
            </Slide>
            <Slide index={1}>
              <div className="grid md:grid-cols-2 gap-8 justify-items-center">
                {HotelData.map((item, index) => (
                  <HotelCarousel
                    hotelImg={item.hotelImg}
                    key={index}
                    city={item.city}
                    country={item.country}
                    rating={item.rating}
                    oldPrice={item.oldPrice}
                    newPrice={item.newPrice}
                  />
                ))}
              </div>
            </Slide>
          </Slider>
          <div className="flex justify-center gap-8 pt-10">
            <ButtonBack>
              <div className="border-2 rounded-full text-gray-400 cursor-pointer w-8 h-8 flex justify-center items-center text-3xl ">
                <BsArrowLeftShort />
              </div>
            </ButtonBack>
            <ButtonNext>
              <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer w-8 h-8 flex justify-center items-center text-3xl">
                <BsArrowRightShort />
              </div>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </section>
    </>
  );
};

export default Hotels;
