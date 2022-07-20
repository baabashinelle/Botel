import React from 'react'
import travelMan from "../assets/man.png"

const Header = () => {
  return (
    <div>
      <div className="flex flex-row pl-16 pt-9 justify-center items-center">
        <div className='w-[36rem] pt-20'>
          <h1 className="text-[64px] font-semibold leading-none font-header tracking-wide">
            Get started your exciting
            <span className="text-primary-o"> Journey</span> with us.
          </h1>
          <p className="text-xl text-text-light w-[30rem] pt-10 pb-10 font-text leading-9">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <div>
            <button className="w-[10rem] p-3 font-text rounded-md bg-white font-semibold text-primary-o border-primary-o border-[1px]">
              Discover Now
            </button>
          </div>
        </div>

        <div>
          <div className='w-[45rem]'>
            <img src={travelMan} alt="Happy Man Ready To Travel" />
          </div>
        </div>
      </div>

      <div className='flex justify-center bg-white'>
        <div>
        </div>
      </div>
    </div>
  );
}

export default Header