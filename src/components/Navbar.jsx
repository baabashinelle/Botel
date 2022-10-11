import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import loginImg from "../assets/orange-login.jpg";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import MyModal from "./TryModal";
import ModalDesign from "./ModalDesign";

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

          <MyModal Design={ModalDesign}/>
        </article>
      </div>

      
    </nav>
  );
};

export default Navbar;
