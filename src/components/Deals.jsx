import React from 'react'
import Hotels from './Hotels'


const Deals = () => {
  return (
    <div className="bg-bg-c flex flex-col justify-center items-center pt-24 pb-20">
      <article className='p-3 md:p-0'>
        <h3 className="font-header font-bold text-primary-b text-center md:text-4xl sm:text-3xl text-2xl">
          Exclusive
          <span className="text-primary-o"> deals &amp; discounts</span>
        </h3>
        <p className="text-text-light font-text text-center md:text-lg md:w-[30rem] sm:w-[25rem] pt-10 md:pb-14 pb-8">
          Discover our fantastic early booking discounts &amp; start planning
          your journey.
        </p>
      </article>
      <article className='flex justify-center items-center'>
        <Hotels />
      </article>
      {/* <article className="flex pt-10 text-3xl gap-5">
        <div className="border-2 rounded-full text-gray-400 cursor-pointer">
          <BsArrowLeftShort />
        </div>
        <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer">
          <BsArrowRightShort />
        </div>
      </article> */}
    </div>
  );
}

export default Deals