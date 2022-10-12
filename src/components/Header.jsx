import React from "react";
import travelMan from "../assets/man.png";
import mapIcon from "../assets/map.png";
import starIcon from "../assets/star.png";
import trophyIcon from "../assets/trophy.png";

const Header = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row md:pl-16 pl-10 justify-center items-center">
        <article className="md:w-[36rem]">
          <h1 className="pt-14 md:pt-0 md:text-[64px] text-[40px] font-semibold md:leading-none leading-tight font-header tracking-wide">
            Get started your exciting
            <span className="text-primary-o"> Stay</span> with us.
          </h1>
          <p className="md:text-xl text-lg text-text-light md:w-[30rem] pt-10 pb-10 font-text md:leading-9">
            A Team of experienced tourism professionals will provide you with
            the best advice and tips for your desire place.
          </p>
          <div>
            <button className="w-[10rem] p-3 font-text rounded-md bg-white font-semibold text-primary-o border-primary-o border-[1px]">
              Discover Now
            </button>
          </div>
        </article>

        <article className="grid grid-cols-custom grid-rows-custom font-text content-center">
          <div className="md:w-[45rem] w-[28rem] col-start-1 col-end-9 row-start-1 row-end-8">
            <img src={travelMan} alt="Happy Man Ready To Travel" />
          </div>
          <div className="col-start-1 col-end-3 row-start-3 row-end-4">
            <div className="flex items-center gap-3 bg-white p-2 md:w-[16ch] w-[14ch] h-fit rounded-md drop-shadow-md">
              <img src={trophyIcon} alt="Trophy Icon" />
              <p>Best Hotel Awards</p>
            </div>
          </div>
          <div className="col-start-2 col-end-5 row-start-6 row-end-7">
            <div className="flex items-center gap-3 bg-white p-2 md:w-[20ch] w-[18ch] h-fit rounded-md drop-shadow-md">
              <img src={starIcon} alt="Star Icon" />
              <p>27K Customer Reviews</p>
            </div>
          </div>
          <div className="col-start-7 col-end-9 row-start-4 row-end-5">
            <div className="flex items-center gap-3 bg-white p-2 md:w-[16ch] w-[14ch] h-fit rounded-md drop-shadow-md">
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
