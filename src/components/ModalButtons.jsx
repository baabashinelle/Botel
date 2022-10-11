import React from 'react'

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

