import React from 'react'
import NecessaryCards from '../components/NecessaryCards';

const Necessities = () => {
  return (
    <section className="bg-bg-off flex flex-col justify-center items-center pt-24 pb-20">
      <article>
        <h3 className="font-header font-bold text-primary-b text-center md:text-4xl text-3xl relative md:after:content-[url('./assets/TwoPlanes.png')] after:block after:absolute after:left-[15em] after:-top-[0.3em]">
          Things you need <span className="text-primary-o">to do</span>
        </h3>
        <p className="text-text-light font-text text-center text-lg md:w-[30rem] w-[25rem] pt-10 pb-14">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
      </article>
      <article>
        <NecessaryCards />
      </article>
    </section>
  );
}

export default Necessities