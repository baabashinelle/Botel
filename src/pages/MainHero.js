import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import SearchSection from "../components/SearchSection";

const MainHero = () => {
  return (
    <div className='bg-bg-c'>
        <Navbar/>
        <Header/>
        <SearchSection/>
    </div>
  )
}

export default MainHero