import React from 'react'
import loginImg from "../assets/orange-login.jpg";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="flex items-center gap-16 h-screen overflow-y-hidden font-text">
      <article className='w-1/2'>
        <img src={loginImg} alt="login" />
      </article>
      <article className="flex flex-col gap-4 w-1/4">
        <h1 className='text-4xl font-header font-bold'>Login to Botel</h1>
        <label>Username</label>
        <input
          type="text"
          className="p-2 border-2 rounded-md focus:outline-none focus:border-2"
        ></input>
        <label>Password</label>
        <input
          type="password"
          className="p-2 border-2 rounded-md focus:outline-none focus:border-2"
        ></input>
        <button className="bg-primary-o text-white rounded-md py-3 mt-5">
          <Link to="/dashboardhome">Submit</Link>
        </button>
      </article>
    </div>
  );
}

export default LoginPage