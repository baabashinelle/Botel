import React from 'react'
import Hotels from './Hotels';

const Deals = () => {
  return (
    <div className="bg-bg-c flex flex-col justify-center items-center pt-24 pb-20">
      <article>
        <h3 className="font-header font-bold text-primary-b text-center text-4xl">
          Exclusive <span className="text-primary-o">deals &amp; discounts</span>
        </h3>
        <p className="text-text-light font-text text-center text-lg w-[30rem] pt-10 pb-14">
          Discover our fantastic early booking discounts &amp; start planning your journey.
        </p>
      </article>

      <article>
        <Hotels/>
      </article>
    </div>
  );
}

export default Deals