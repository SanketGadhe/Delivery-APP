import React from 'react'

const Choice = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4 p-5 bg-[#FF5C5C]'>
      <div className="text-white mt-12 flex-1">
        <p className="font-bold text-3xl md:text-4xl lg:text-6xl leading-tight">
          Why Choose Our Courier Service
        </p>
        <p className='text-base md:text-lg mt-5 lg:mt-10'>
          Choose our courier service for reliable and timely deliveries, ensuring your packages reach their destinations safely. We offer competitive pricing and a range of options to fit your budget. Our extensive network and dedicated customer support team ensure a seamless experience.
        </p>
      </div>
      <div className="img flex-1 mt-5 lg:mt-0">
        <img src="src/Static/choice1.png" className='w-full h-auto max-w-md mx-auto lg:mx-0' alt="Why Choose Us" />
      </div>
    </div>
  )
}

export default Choice
