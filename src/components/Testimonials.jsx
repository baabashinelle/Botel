import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import avatarImg from "../assets/avatar.jpg";

const Testimonials = () => {
  return (
    <section className="bg-bg-off flex flex-col lg:flex-row justify-center items-center gap-16 pt-24 pb-20 p-3 xl:p-0 xl:py-14 font-text">
      <div className="relative md:after:content-[url('./assets/planes.png')] after:block after:absolute xl:after:-right-[45em] lg:after:-right-[31em] md:after:-right-[9.5rem] lg:after:-top-[4em] md:after:top-[3em]">
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
            <BsArrowLeftShort />
          </div>
          <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer">
            <BsArrowRightShort />
          </div>
        </article>
      </div>
      <div className="flex flex-col md:pb-16 lg:pb-0">
        <article className="sm:-mb-3 -mb-4 -ml-1 sm:-ml-5 z-30">
          <img
            src={avatarImg}
            alt="avatar"
            className="rounded-full w-16 h-16"
          ></img>
        </article>
        <article className="bg-white py-5 px-8 rounded-lg md:w-[30rem] lg:w-[25rem] sm:w-[20rem] z-10 drop-shadow-md">
          <p className="text-base">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="pt-5">
            <h4 className="font-bold text-sm">Mike Taylor</h4>
            <p className="text-xs">Lahore, Pakistan</p>
          </p>
        </article>
        <article className="bg-white py-5 px-8 rounded-lg md:w-[30rem] lg:w-[25rem] sm:w-[20rem] opacity-50 2xl:-mt-36 md:-mt-24 sm:-mt-32 -mt-40 ml-10 drop-shadow-xl">
          <p className="text-base">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="pt-5">
            <h4 className="font-bold text-sm">Chris Taylor</h4>
            <p className="text-xs">CEO of Apple</p>
          </p>
        </article>
      </div>
    </section>
  );
};

export default Testimonials;
