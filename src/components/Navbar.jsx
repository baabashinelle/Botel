import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import loginImg from "../assets/orange-login.jpg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <nav className="pt-6 font-text">
      <div className="flex justify-around items-center">
        <article className="flex flex-row items-center gap-2">
          <h3 className="text-2xl font-bold font-header">Botel</h3>
          <div>
            <img src={logo} alt="Botel Logo" />
          </div>
        </article>
        <article>
          <ul className="flex flex-row gap-6">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Tour</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </article>

        <article className="gap-5 flex">
          <button
            type="button"
            onClick={openModal}
            className="text-[#FD8D3A] font-bold"
          >
            Login
          </button>

          <button
            onClick={openModal}
            className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl font-bold"
          >
            Sign up
          </button>
        </article>
      </div>

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
    </nav>
  );
};

export default Navbar;
