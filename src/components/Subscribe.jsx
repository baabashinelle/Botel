import React from "react";

const Subscribe = () => {
  return (
    <section className="flex flex-col justify-center items-center pt-24 pb-20 bg-bg-c font-text text-white">
      <div className="w-fit bg-primary-o py-20 px-32 rounded-lg overflow-hidden relative before:content-[url('./assets/trees-white.png')] before:block before:absolute before:right-0 before:top-[0.5rem] after:content-[url('./assets/circles.png')] after:block after:w-10 after:absolute after:left-0 after:-bottom-2">
        <h2 className="text-3xl font-bold font-header text-center w-[25ch]">
          Subscribe and get exclusive deals &amp; offer
        </h2>
      </div>
    </section>
  );
};

export default Subscribe;
