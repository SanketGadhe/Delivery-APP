import React from 'react'

const Feature = () => {
  return (
    <div>
      <div className="feature1 flex flex-col lg:flex-row items-center gap-10 px-5 md:px-10 lg:px-16 my-5">
        <div className="text w-full lg:w-2/5">
          <div className="top text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Place order
          </div>
          <div className="center text-base md:text-lg font-bold mt-5 lg:mt-10">
            Stay in the loop! Follow packages from pickup to drop-off. From essentials to surprises, know their status every step.
          </div>
          <div className="buttonfeature mt-5 lg:mt-10">
            <button className='bg-[#FF5C5C] px-5 md:px-7 lg:px-9 text-sm md:text-lg text-white py-2 rounded-md'>Order</button>
          </div>
        </div>
        <div className="img w-full lg:w-3/5">
          <img src="src/Static/next1.png" className='w-full h-auto max-w-md lg:max-w-lg mx-auto lg:mx-0' alt="Place order" />
        </div>
      </div>
      
      <div className="feature2 flex flex-col-reverse lg:flex-row items-center gap-10 justify-end px-5 md:px-10 lg:px-16 my-5">
        <div className="img w-full lg:w-2/5">
          <img src="src/Static/next2.png" className='w-full h-auto max-w-md lg:max-w-lg mx-auto lg:mx-0' alt="Check Nearby Delivery" />
        </div>
        <div className="text w-full lg:w-2/5">
          <div className="top text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Check Nearby Delivery
          </div>
          <div className="center text-base md:text-lg font-bold mt-5 lg:mt-10">
            Stay in the loop! Follow packages from pickup to drop-off. From essentials to surprises, know their status every step.
          </div>
          <div className="buttonfeature mt-5 lg:mt-10">
            <button className='bg-[#FF5C5C] px-5 md:px-7 lg:px-9 text-sm md:text-lg text-white py-2 rounded-md'>Nearby Delivery</button>
          </div>
        </div>
      </div>

      <div className="feature3 flex flex-col lg:flex-row items-center gap-10 px-5 md:px-10 lg:px-16 my-5">
        <div className="text w-full lg:w-2/5">
          <div className="top text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
            Check Nearby Delivery
          </div>
          <div className="center text-base md:text-lg font-bold mt-5 lg:mt-10">
            Stay in the loop! Follow packages from pickup to drop-off. From essentials to surprises, know their status every step.
          </div>
          <div className="buttonfeature mt-5 lg:mt-10">
            <button className='bg-[#FF5C5C] px-5 md:px-7 lg:px-9 text-sm md:text-lg text-white py-2 rounded-md'>Nearby Delivery</button>
          </div>
        </div>
        <div className="img w-full lg:w-3/5">
          <img src="src/Static/next3.png" className='w-full h-auto max-w-md lg:max-w-lg mx-auto lg:mx-0' alt="Check Nearby Delivery" />
        </div>
      </div>
    </div>
  )
}

export default Feature
