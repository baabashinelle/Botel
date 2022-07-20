import React from 'react'
import logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="pt-6 font-text">
      <div className="flex justify-around items-center">
        <div className="flex flex-row items-center gap-2">
          <h3 className="text-2xl font-bold font-header">Botel</h3>
          <div>
            <img src={logo} alt="Botel Logo" />
          </div>
        </div>
        <div>
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
        </div>

        <div className="gap-5 flex">
          <button href="#" className="text-[#FD8D3A]">
            Login
          </button>
          <button className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar