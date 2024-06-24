import React from 'react'

const Work = () => {
  return (
    <div className='w-full h-auto bg-[#FF5C5C] text-white flex flex-col lg:flex-row flex-wrap'>
      <div className="imageandtext flex flex-col lg:flex-row gap-2 w-full lg:w-1/3 justify-center items-center p-4">
        <div className="img -mt-5">
          <img src="src/Static/working1.png" className='w-44 md:w-64 lg:w-80' alt="Working Process" />
        </div>
        <div className="text text-center lg:text-left w-full lg:w-1/2 text-xl md:text-2xl lg:text-4xl font-bold mt-4 lg:mt-0">
          Our Working Process
        </div>
      </div>
      <div className="circlecard flex flex-wrap items-center justify-center gap-10 lg:gap-20 lg:ml-12 p-4 w-full lg:w-[60%]">
        {['Booking', 'Packing', 'Transportation', 'Delivery'].map((step, index) => (
          <div key={index} className="card1 text-center">
            <div className="circle rounded-full bg-[#FFF5E6] p-4 lg:px-5 lg:py-5 h-fit w-fit flex justify-center items-center">
              <img src={`src/Static/working${index + 2}.png`} className='w-10 h-10 lg:w-16 lg:h-16' alt={step} />
            </div>
            <p className='mt-2 text-sm md:text-base'>{step}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Work
