import React from 'react'
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";


const Blog = () => {
  return (
    <section className="bg-bg-c flex flex-col justify-center items-center pt-24 pb-20">
      <article>
        <h3 className="font-header font-bold text-primary-b text-center text-4xl">
          Get update with
          <span className="text-primary-o"> latest blog</span>
        </h3>
      </article>
      <article className='pt-8'>
      </article>
    </section>
  );
}

export default Blog