import React from 'react'
// import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import Hotels from './Hotels';

const BestPlan = () => {
  return (
    <div className="bg-bg-c flex flex-col justify-center items-center pt-24 pb-20">
      <article>
        <h3 className="font-header font-bold text-primary-b text-center md:text-4xl sm:text-3xl text-2xl relative md:after:content-[url('./assets/trees.png')] after:block after:absolute after:left-[13em] after:-top-[0.3em]">
          Best
          <span className="text-primary-o"> vacation plan</span>
        </h3>
        <p className="text-text-light font-text text-center md:text-lg lg:w-[30rem] md:w-[25rem] pt-10 md:pb-14 pb-8">
          Plan your perfect vacation with our travel agency. Choose among
          hundreds of all-inclusive offers!
        </p>
      </article>
      {/* <article className="flex gap-5 md:justify-end justify-center w-full md:pr-[12rem] pb-8 text-3xl">
        <div className="border-2 rounded-full text-gray-400 cursor-pointer">
          <BsArrowLeftShort />
        </div>
        <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer">
          <BsArrowRightShort />
        </div>
      </article> */}
      <article>
        <Hotels />
      </article>
    </div>
  );
}

export default BestPlan