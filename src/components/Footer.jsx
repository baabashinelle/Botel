import React from "react";
import logo from "../assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-bg-off flex flex-col gap-14 pt-[18rem] pb-14 font-text">
      <section className="flex justify-center">
        <article className="flex flex-col gap-3 basis-1/3">
          <div className="flex flex-row items-center gap-2">
            <h3 className="text-2xl font-bold font-header">Botel</h3>
            <div>
              <img src={logo} alt="Botel Logo" />
            </div>
          </div>
          <p className="w-[30ch] pb-2">
            Book your stay in minutes, get full control for much longer.
          </p>
          <div className="flex gap-5">
            <span className="p-3 bg-white rounded-full drop-shadow-md">
              <FaFacebookF />
            </span>
            <span className="p-3 bg-white rounded-full drop-shadow-md">
              <BsInstagram />
            </span>
            <span className="p-3 bg-white rounded-full drop-shadow-md">
              <AiOutlineTwitter />
            </span>
          </div>
        </article>
        <div className="flex gap-16">
          <article className="flex flex-col gap-3 text-gray-400">
            <h3 className="font-bold pb-2 text-black">Company</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Logistic</p>
            <p>Privacy Policy</p>
          </article>
          <article className="flex flex-col gap-3 text-gray-400">
            <h3 className="font-bold pb-2 text-black">Contact</h3>
            <p>Help/FAQ</p>
            <p>Press</p>
            <p>Affilates</p>
          </article>
          <article className="flex flex-col gap-3 text-gray-400">
            <h3 className="font-bold pb-2 text-black">More</h3>
            <p>Press Centre</p>
            <p>Our Blog</p>
            <p>Low fare tips</p>
          </article>
        </div>
      </section>

      {/* Lower Footer */}
      <section className="flex justify-center px-[19rem]">
        <article className="flex justify-between text-gray-400 border-t-2 w-full pt-8">
          <p>Copyright, Botel 2022. All rights reserved.</p>
          <p>Terms &amp; Conditions</p>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
