import React from "react";
import { TbLoader } from "react-icons/tb";

const Preloader = () => {
  return (
    <div className="text-xl w-screen h-screen justify-center flex gap-x-2 font-text">
      <TbLoader className="animate-spin text-2xl"/>
    </div>
  );
};

export default Preloader;
