import React from 'react'
import loginImg from "../assets/orange-login.jpg";
import { Link } from "react-router-dom";

const ModalDesign = () => {
  return (
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
  );
}

export default ModalDesign