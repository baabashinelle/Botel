import React from 'react'
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
      <article>
        <Hotels />
      </article>
    </div>
  );
}

export default BestPlan