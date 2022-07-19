import React from 'react'
import travelMan from "../assets/man.png"

const Header = () => {
  return (
    <div>
      <div className="flex flex-row pl-36 pt-9">
        <div className='w-[36rem] pt-20'>
          <h1 className="text-[64px] font-bold leading-none">
            Get started your exciting
            <span className="text-[#FA7436]"> Journey</span> with us.
          </h1>
          <p className="text-xl text-[#666666] w-[30rem] pt-10 pb-10">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <div>
            <button className="w-[10rem] p-3 rounded-md bg-white font-semibold text-[#FA7436] border-[#FA7436] border-[1px]">
              Discover Now
            </button>
          </div>
        </div>

        <div>
          <div className='w-[50rem]'>
            <img src={travelMan} alt="Happy Man Ready To Travel" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header