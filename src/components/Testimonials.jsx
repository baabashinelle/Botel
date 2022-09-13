import React from 'react'
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const Testimonials = () => {
  return (
    <section className="bg-bg-off flex justify-center items-center pt-24 pb-20 relative after:content-[url('./assets/planes.png')] after:block after:absolute after:right-[15em] after:top-[2em]">
      <div>
        <article>
          <h3 className="font-header font-bold text-primary-b text-center text-4xl">
            What people say <span className="text-primary-o">about us.</span>
          </h3>
          <p className="text-text-light font-text text-lg w-[30rem] pt-10 pb-14">
            Our Clients send us bunch of smilies with our services and we love
            them.
          </p>
        </article>
        <article className="flex pt-4 text-3xl gap-5">
          <div className="border-2 rounded-full text-gray-400 cursor-pointer bg-white">
            <BsArrowLeftShort />
          </div>
          <div className="rounded-full bg-primary-o border-2 border-primary-o text-white cursor-pointer">
            <BsArrowRightShort />
          </div>
        </article>
      </div>
      <div className='grid'>
        <div></div>
      </div>
    </section>
  );
}

export default Testimonials