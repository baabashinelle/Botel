import React from 'react'
import hotelImg from '../assets/hotel-illus.svg'

const DashboardIllustration = () => {
  return (
    <div className='md:flex flex-col justify-center items-center hidden'>
        <img src={hotelImg} alt="Hotel Illustration" className='w-[30rem]'></img>
        <p className='font-text pt-5'>Ready for vacation? <span className='text-primary-o'>Book</span> a Hotel now!</p>
    </div>
  )
}

export default DashboardIllustration;