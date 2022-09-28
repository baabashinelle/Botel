import React from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import avatarImg from "../assets/avatar.JPG";

const Testimonials = () => {
  return (
    <section className="bg-bg-off flex justify-center items-center gap-16 pt-24 pb-20 font-text">
      <div className="relative after:content-[url('./assets/planes.png')] after:block after:absolute after:-right-[45em] after:-top-[4em]">
        <article>
          <h3 className="font-header font-bold text-primary-b text-4xl">
            What people say <span className="text-primary-o">about us.</span>
          </h3>
          <p className="text-text-light font-text text-lg w-[30rem] pt-10 pb-14">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
        </article>
        <article className="flex text-3xl gap-5">
          <div className="border-2 rounded-full text-gray-400 cursor-pointer bg-white">
            <BsArrowLeftShort />
          </div>
          <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer">
            <BsArrowRightShort />
          </div>
        </article>
      </div>
      <div className="flex flex-col">
        <article className="-mb-3 -ml-5 z-30">
          <img
            src={avatarImg}
            alt="avatar"
            className="rounded-full w-16 h-16"
          ></img>
        </article>
        <article className="bg-white py-5 px-8 rounded-lg w-[30rem] z-10 drop-shadow-md">
          <p className="text-base">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
          <p className="pt-5">
            <h4 className="font-bold text-sm">Mike Taylor</h4>
            <p className="text-xs">Lahore, Pakistan</p>
          </p>
        </article>
        <article className="bg-white py-5 px-8 rounded-lg w-[30rem] opacity-50 -mt-24 ml-10 drop-shadow-xl">
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
