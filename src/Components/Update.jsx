import React from 'react'

const Update = () => {
  return (
    <div className='flex flex-col lg:flex-row mt-8 justify-center gap-8 lg:gap-14 items-center p-5'>
      <div className="text w-full lg:w-2/5">
        <div className="top text-2xl md:text-3xl lg:text-4xl font-bold">
          Stay Updated With Our Latest News
        </div>
        <div className="center text-sm md:text-base font-bold mt-4 lg:mt-8">
          Get our latest updates, news, blog posts and much more directly to your inbox. Subscribe and join our mailing list today.
        </div>
        <div className="top flex mt-4 lg:mt-5">
          <input 
            type="text" 
            className='w-full md:w-2/3 lg:w-60 text-sm text-gray-700 h-12 rounded-lg px-4' 
            placeholder='Your Email Address'
          />
          <button className='bg-[#FF5C5C] px-5 md:px-7 lg:px-9 text-sm md:text-lg text-white py-2 rounded-md -ml-6'>
            Subscribe
          </button>
        </div>
      </div>
      <div className="img w-full lg:w-2/5">
        <img 
          src="src/Static/support1.png" 
          className='w-full h-auto max-w-md lg:max-w-lg mx-auto lg:mx-0' 
          alt="Stay Updated" 
        />
      </div>
    </div>
  )
}

export default Update
