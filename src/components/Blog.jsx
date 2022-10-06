import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import tallBuilding from "../assets/tall-building.png";
import wooden from "../assets/wooden.png";
import building from "../assets/building.png";
import rock from "../assets/rocks.png";

const responsive = {
  0: { items: 1 },
  568: { items: 3 },
  1024: { items: 4 },
};

const items = [
  <div className="item w-full" data-value="1">
    <img src={tallBuilding}></img>
    <h5 className="font-bold pt-3 w-[24ch]">
      The Amazing Difference a Year of Travelling.
    </h5>
    <p className="pt-4 text-gray-400">July 27, 2021</p>
  </div>,
  <div className="item w-full" data-value="2">
    <img src={wooden}></img>
    <h5 className="font-bold pt-3 w-[24ch]">
      Travel far enough, you meet yourself.
    </h5>
    <p className="pt-4 text-gray-400">July 27, 2021</p>
  </div>,
  <div className="item w-full" data-value="3">
    <img src={building}></img>
    <h5 className="font-bold pt-3 w-[24ch]">
      How to save money while visiting Africa.
    </h5>
    <p className="pt-4 text-gray-400">July 27, 2021</p>
  </div>,
  <div className="item w-full" data-value="4">
    <img src={rock}></img>
    <h5 className="font-bold pt-3 w-[24ch]">
      Reflections on 5 months of Travel: Time to Hang.
    </h5>
    <p className="pt-4 text-gray-400">July 27, 2021</p>
  </div>,
  <div className="item w-full" data-value="5">
    <img src={tallBuilding}></img>
    <h5 className="font-bold pt-3 w-[24ch]">
      The Amazing Difference a Year of Travelling.
    </h5>
    <p className="pt-4 text-gray-400">July 27, 2021</p>
  </div>,
];

const Blog = () => {
  return (
    <section className="bg-bg-c flex flex-col justify-center items-center pt-24 pb-20 font-text">
      <article>
        <h3 className="font-header font-bold text-primary-b text-center text-4xl">
          Get update with
          <span className="text-primary-o"> latest blog</span>
        </h3>
      </article>
      <article className="pt-12 w-[70%]">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          disableButtonsControls={true}
        />
      </article>
    </section>
  );
};

export default Blog;
