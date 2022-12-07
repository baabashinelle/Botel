import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Testimonials = () => {
  const changeSlide = () => {
    const slide = document.querySelectorAll(".slide-testimonial");
    for (let i = 0; i < slide.length; i++) {
      slide[i].classList.toggle("slide-testimonial-active");
    }

    const avatarImg = document.querySelector(".img-div");
    avatarImg.classList.toggle("new-bg");
  };
  return (
    <section className="bg-bg-off flex flex-col lg:flex-row justify-center items-center gap-16 pt-24 pb-20 p-3 xl:p-0 xl:py-14 font-text">
        <div className="relative">
          <article className="md:pt-16 xl:pt-0">
            <h3 className="font-header font-bold text-primary-b md:text-4xl sm:text-3xl text-2xl text-center md:text-left">
              What people say <span className="text-primary-o">about us.</span>
            </h3>
            <p className="text-text-light font-text md:text-lg lg:w-[30rem] md:w-[25rem] pt-10 md:pb-14 pb-5 text-center lg:text-left">
              Our Clients send us bunch of smilies with our services and we love
              them.
            </p>
          </article>
          <article className="flex justify-center lg:justify-start text-3xl gap-5">
            <div className="border-2 rounded-full text-gray-400 cursor-pointer bg-white">
              <BsArrowLeftShort onClick={changeSlide} />
            </div>
            <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer">
              <BsArrowRightShort onClick={changeSlide} />
            </div>
          </article>
        </div>
        <div className="flex flex-col md:pb-16 lg:pb-0 relative">
          <article className="sm:-mb-3 -mb-4 -ml-1 sm:-ml-5 z-30">
            <div
              className="rounded-full w-16 h-16 avatar img-div transition-all"
            ></div>
          </article>
          <article className="slide-testimonial md:w-[30rem] lg:w-[25rem] sm:w-[20rem] opacity-0 absolute top-14 drop-shadow-md slide-testimonial-active">
            <p className="text-base">
              “Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus commodi minima sit, ipsum quo ex quas consequatur labore sequi?.”
            </p>
            <p className="pt-5">
              <div className="font-bold text-sm">Mike Taylor</div>
              <p className="text-xs">Lahore, Pakistan</p>
            </p>
          </article>
          <article className="slide-testimonial md:w-[30rem] lg:w-[25rem] sm:w-[20rem] opacity-0 drop-shadow-md">
            <p className="text-base">
              “Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio officia, corrupti voluptates ipsa atque numquam illum ipsam rem culpa laboriosam.”
            </p>
            <p className="pt-5">
              <div className="font-bold text-sm">Chris Taylor</div>
              <p className="text-xs">CEO of Apple</p>
            </p>
          </article>
        </div>
      </section>
  );
};

export default Testimonials;
