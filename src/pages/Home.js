import React from 'react'
import BestPlans from '../components/BestPlans';
import Deals from '../components/Deals';
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Necessities from '../components/Necessities';
import SearchSection from "../components/SearchSection";

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
        <BestPlans/>
      </div>
    </>
  );
}

export default Home