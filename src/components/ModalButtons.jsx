import React from 'react'

export const ModalSignUp = ({openModal, children}) => {
  return (
    <div onClick={openModal}>
      {children}
    </div>
  );
}


