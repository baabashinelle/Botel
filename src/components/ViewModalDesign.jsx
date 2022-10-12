import React from 'react'

const ViewModalDesign = () => {
  return (
    <div className="flex items-center justify-center">
      <article className="flex flex-col gap-4 mx-4">
        <input
          type="text"
          placeholder="Username"
          className="p-2 border-2 rounded-md focus:outline-none focus:border-2"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 border-2 rounded-md focus:outline-none focus:border-2"
        ></input>
      </article>
    </div>
  );
}

export default ViewModalDesign