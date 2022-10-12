import React from 'react'
import { AiOutlineEye } from "react-icons/ai";

export const ModalSignUp = ({openModal}) => {
  return (
    <button
      onClick={openModal}
      className="bg-bg-o text-white rounded-md w-[8rem] p-2 drop-shadow-xl font-bold"
    >
      Sign up
    </button>
  );
}

export const ModalView = ({openModal}) => {
  return (
    <AiOutlineEye
      className="hover:text-gray-600 hover:scale-125"
      onClick={openModal}
    />
  );
}

