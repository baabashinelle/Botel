import React from "react";
import formIcon from "../../assets/form.png";
import Wallet from "../../assets/wallet.png";
import Location from "../../assets/location.png";
import { Slide } from "react-awesome-reveal";

const NecessaryCards = () => {
  return (
    <section className="grid lg:grid-cols-3 gap-5 p-5 md:p-0 lg:px-8 justify-center">
      <Slide cascade triggerOnce damping={0.3} delay={100} duration={1300}>
        <article className="bg-card-y bg-no-repeat md:w-96 lg:w-fit xs:bg-cover xs:bg-center h-[20rem] p-10">
          <div>
            <img src={formIcon} alt="Form icon" />
          </div>
          <div className="font-text pt-12">
            <h5 className="text-xl text-primary-b font-semibold">Sign Up</h5>
            <p className="text-text-light pt-5 xl:w-[25ch] 2xl:w-[30ch]">
              Completes all the work associated with planning and processing
            </p>
          </div>
        </article>

        <article className="bg-card-b bg-no-repeat md:w-96 lg:w-fit xs:bg-cover xs:bg-center h-[20rem] p-10">
          <div>
            <img src={Wallet} alt="Wallet icon" />
          </div>
          <div className="font-text pt-12">
            <h5 className="text-xl text-primary-b font-semibold">
              Worth of Money
            </h5>
            <p className="text-text-light pt-5 xl:w-[25ch] 2xl:w-[30ch]">
              After successful access then book from exclusive deals &amp;
              pricing
            </p>
          </div>
        </article>

        <article className="bg-card-y bg-no-repeat md:w-96 lg:w-fit xs:bg-cover xs:bg-center h-[20rem] p-10">
          <div>
            <img src={Location} alt="Wallet icon" />
          </div>
          <div className="font-text pt-12">
            <h5 className="text-xl text-primary-b font-semibold">
              Exciting Travel
            </h5>
            <p className="text-text-light pt-5 xl:w-[25ch] 2xl:w-[30ch]">
              Start and explore a wide range of exciting travel experience
            </p>
          </div>
        </article>
      </Slide>
    </section>
  );
};

export default NecessaryCards;
