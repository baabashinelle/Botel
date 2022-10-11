import React from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import hotelFour from "../assets/hotel4.png";
import hotelTwo from "../assets/hotel2.png";
import hotelThree from "../assets/hotel3.png";
import star from "../assets/review-star.png";
import loginImg from "../assets/orange-login.jpg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";


const Hotels = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section className="grid md:grid-cols-4 gap-6 font-text">
      <article className="hover:shadow-2xl cursor-pointer hover:shadow-[#ffe7db]">
        <img src={hotelFour} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md hover:border-none">
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
      <article className="relative cursor-pointer hover:shadow-2xl hover:shadow-[#ffe7db] hotel-card">
        <img src={hotelTwo} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md hover:border-none">
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

          <button
            onClick={openModal}
            className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl absolute top-[50%] left-[25%] hotel-btn"
          >
            Book Now
          </button>
        </div>
      </article>
      <article className="hover:shadow-2xl cursor-pointer hover:shadow-[#ffe7db]">
        <img src={hotelFour} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md hover:border-none">
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
      <article className="hover:shadow-2xl cursor-pointer hover:shadow-[#ffe7db]">
        <img src={hotelThree} alt="Random Hotel"></img>
        <div className="px-4 py-7 border-x-2 border-b-2 rounded-b-md hover:border-none">
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

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFr
              om="opacity-100"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-100 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block max-w-[36rem] overflow-hidden text-left font-text align-middle transition-all transform bg-white shadow-xl rounded-md">
                <div className="flex items-center justify-center">
                  <article>
                    <img src={loginImg} alt="login" />
                  </article>
                  <article className="flex flex-col gap-4 mx-4">
                    <input
                      type="text"
                      placeholder="Username"
                      className="p-2 border-2 rounded-md focus:outline-none focus:border-2"
                    ></input>
                    <input
                      type="password"
                      placeholder="Password"
                      className="p-2 border-2 rounded-md focus:outline-none focus:border-2"
                    ></input>
                    <button className="bg-primary-o text-white rounded-md py-2">
                      <Link to="/dashboard">Submit</Link>
                    </button>
                    <p className="text-center text-gray-500 text-sm underline cursor-pointer">
                      New user? Sign Up
                    </p>
                  </article>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Hotels;
