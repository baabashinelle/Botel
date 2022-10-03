import React from "react";
import travelMan from "../assets/man.png";
import mapIcon from '../assets/map.png';
import starIcon from "../assets/star.png";
import trophyIcon from "../assets/trophy.png";


const Header = () => {
  return (
    <section>
      <div className="flex flex-row pl-16 justify-center">
        <article className="w-[36rem] self-center">
          <h1 className="text-[64px] font-semibold leading-none font-header tracking-wide">
            Get started your exciting
            <span className="text-primary-o"> Stay</span> with us.
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
        </article>

        <article className="grid grid-cols-custom grid-rows-custom font-text">
          <div className="w-[45rem] col-start-1 col-end-8">
            <img src={travelMan} alt="Happy Man Ready To Travel" />
          </div>
          <div className="col-start-1 row-start-3">
            <div className="flex items-center gap-3 bg-white p-2 w-[16ch] h-fit rounded-md drop-shadow-md">
              <img src={trophyIcon} alt="Trophy Icon" />
              <p>Best Hotel Awards</p>
            </div>
          </div>
          <div className="col-start-2 row-start-6">
            <div className="flex items-center gap-3 bg-white p-2 w-[20ch] h-fit rounded-md drop-shadow-md">
              <img src={starIcon} alt="Star Icon" />
              <p>27K Customer Reviews</p>
            </div>
          </div>
          <div className="col-start-7 row-start-4">
            <div className="flex items-center gap-3 bg-white p-2 w-[16ch] h-fit rounded-md drop-shadow-md">
              <img src={mapIcon} alt="Map Icon" />
              <p>Explore the World</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Header;
