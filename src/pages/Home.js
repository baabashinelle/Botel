import React from "react";
import BestPlan from "../components/Home/BestPlan";
import Blog from "../components/Home/Blog";
import Deals from "../components/Home/Deals";
import Footer from "../components/Home/Footer";
import Header from "../components/Home/Header";
import Navbar from "../components/Home/Navbar";
import Necessities from "../components/Home/Necessities";
import SearchSection from "../components/Home/SearchSection";
import Subscribe from "../components/Home/Subscribe";
import Testimonials from "../components/Home/Testimonials";

const Home = () => {
  return (
    <>
      <div className="bg-bg-c">
        <Navbar />
        <Header />
        <SearchSection />
      </div>
      <div>
        <Necessities />
        <Deals />
        <BestPlan />
        <Testimonials />
        <Blog />
        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Home;
