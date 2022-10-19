import React from "react";
import formIcon from "../assets/form.png";
import Wallet from "../assets/wallet.png";
import Location from "../assets/location.png";

const NecessaryCards = () => {
  return (
    <section className="grid md:grid-cols-3 gap-5">
      <article className="bg-card-y bg-no-repeat md:w-96 h-[20rem] p-10">
        <div>
          <img src={formIcon} alt="Form icon" />
        </div>
        <div className="font-text pt-12">
          <h5 className="text-xl text-primary-b font-semibold">Sign Up</h5>
          <p className="text-text-light pt-5">
            Completes all the work associated with planning and processing
          </p>
        </div>
      </article>

      <article className="bg-card-b bg-no-repeat md:w-96 h-[20rem] p-10">
        <div>
          <img src={Wallet} alt="Wallet icon" />
        </div>
        <div className="font-text pt-12">
          <h5 className="text-xl text-primary-b font-semibold">
            Worth of Money
          </h5>
          <p className="text-text-light pt-5">
            After successful access then book from exclusive deals &amp; pricing
          </p>
        </div>
      </article>

      <article className="bg-card-y bg-no-repeat md:w-96 h-[20rem] p-10">
        <div>
          <img src={Location} alt="Location icon" />
        </div>
        <div className="font-text pt-12">
          <h5 className="text-xl text-primary-b font-semibold">
            Exciting Travel
          </h5>
          <p className="text-text-light pt-5">
            Start and explore a wide range of exciting travel experience
          </p>
        </div>
      </article>
    </section>
  );
};

export default NecessaryCards;
