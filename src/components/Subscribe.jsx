import React from "react";
// import { BsEnvelope } from "react-icons/bs";

const Subscribe = () => {
  return (
    <section className="flex flex-col justify-center items-center -mb-[11rem] pt-24 bg-bg-c font-text">
      <div className="hidden sm:block w-fit bg-primary-o py-24 md:px-[14rem] rounded-lg relative overflow-hidden before:content-[url('./assets/trees-white.png')] before:block before:absolute before:right-0 before:top-[0.5rem] after:bg-[url('./assets/circles.png')] after:bg-no-repeat after:bg-[length:24rem] after:w-full after:h-full after:block after:absolute after:top-20 after:left-0">
        <h2 className="text-3xl font-bold font-header text-center w-[25ch] tracking-wide text-white">
          Subscribe and get exclusive deals &amp; offer
        </h2>
        <div className="flex pt-10 justify-center">
          {/* <span className="absolute text-black">
            <BsEnvelope />
          </span> */}
          <input
            type="text"
            placeholder="Enter your mail"
            className="relative rounded-md md:px-8 pl-4 pr-12 py-3 md:w-full z-20 focus:outline-none focus:border-none"
          ></input>
          <button className="bg-bg-o text-white rounded-md py-2 px-3 absolute right-28 md:right-[14.25rem] bottom-[6.25rem] z-30">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
