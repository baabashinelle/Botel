import React from "react";
import { getHotelById } from "../../utils";
import { useStateValue } from "../../context/stateProvider";

const ViewHotelModal = ({ id }) => {
  const [{ hotels }, dispatch] = useStateValue();
  const hotel = getHotelById(hotels, id);
  console.log(hotel);
  const { image, name, country, city } = hotel;
  return (
    <div className="flex flex-col justify-center px-10 py-10">
      <article>
        <img src={image} alt="Room" />
      </article>
      <article className="flex flex-col gap-2 pt-5">
        <h3 className="font-bold text-lg">{name}</h3>
        <p>
          <span className="bg-[#ffe3d4] text-primary-o px-2 mr-3">Country</span>
          {country}
        </p>
        <p>
          <span className="bg-[#ffe3d4] text-primary-o px-2 mr-3">City</span>
          {city}
        </p>
      </article>
    </div>
  );
};

export default ViewHotelModal;
