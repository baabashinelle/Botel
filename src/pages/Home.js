import React from 'react'
import BestPlan from '../components/BestPlan';
import Blog from '../components/Blog';
import Deals from '../components/Deals';
import Footer from '../components/Footer';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Necessities from '../components/Necessities';
import SearchSection from "../components/SearchSection";
import Subscribe from '../components/Subscribe';
import Testimonials from '../components/Testimonials';

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
        <Deals/>
        <BestPlan/>
        <Testimonials/>
        <Blog/> 
        <Subscribe/>
        <Footer/>
      </div>
    </>
  );
}

export default Home