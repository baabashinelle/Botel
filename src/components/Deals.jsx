import React from 'react'
import Hotels from './Hotels'
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";


const Deals = () => {
  return (
    <div className="bg-bg-c flex flex-col justify-center items-center pt-24 pb-20">
      <article>
        <h3 className="font-header font-bold text-primary-b text-center text-4xl">
          Exclusive{" "}
          <span className="text-primary-o">deals &amp; discounts</span>
        </h3>
        <p className="text-text-light font-text text-center text-lg w-[30rem] pt-10 pb-14">
          Discover our fantastic early booking discounts &amp; start planning
          your journey.
        </p>
      </article>
      <article>
        <Hotels />
      </article>
      <article className="flex pt-10 text-3xl gap-5">
        <div className="border-2 rounded-full text-gray-400 cursor-pointer">
          <BsArrowLeftShort />
        </div>
        <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer">
          <BsArrowRightShort />
        </div>
      </article>
    </div>
  );
}

export default Deals