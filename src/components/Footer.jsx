import React from 'react'
import logo from "../assets/logo.png";
import {FaFacebookF} from 'react-icons/fa';
import { BsInstagram, BsTwitter } from "react-icons/bs";


const Footer = () => {
  return (
    <footer className="bg-bg-off flex justify-center items-center pt-24 pb-20 font-text">
      <article className="flex flex-col gap-3">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-2xl font-bold font-header">Botel</h3>
          <div>
            <img src={logo} alt="Botel Logo" />
          </div>
        </div>
        <p className="w-[30ch]">
          Book your stay in minutes, get full control for much longer.
        </p>
        <div className="flex gap-5">
          <div className='bg-white text-black rounded-full'>
            <FaFacebookF />
          </div>
          <BsInstagram />
          <BsTwitter />
        </div>
      </article>
    </footer>
  );
}

export default Footer