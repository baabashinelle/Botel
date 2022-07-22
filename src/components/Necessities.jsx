import React from 'react'
import NecessaryCards from '../components/NecessaryCards';

const Necessities = () => {
  return (
    <div className="bg-bg-off flex flex-col justify-center items-center pt-24 pb-20">
      <div>
        <h3 className="font-header font-bold text-primary-b text-center text-4xl after:content-[url('./assets/TwoPlanes.png')] after:block after:absolute after:right-56 after:-bottom-[30rem]">
          Things you need <span className="text-primary-o">to do</span>
        </h3>
        <p className="text-text-light font-text text-center text-lg w-[30rem] pt-10 pb-14">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
      </div>

      <div>
        <NecessaryCards />
      </div>
    </div>
  );
}

export default Necessities