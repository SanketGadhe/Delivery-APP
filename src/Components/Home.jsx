import React from 'react'
import Carousel from './Carousel'
import Card from './Card'
import Work from './Work'
import Choice from './Choice'
import Feature from './Feature'
import Update from './Update'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
      <div className="top flex flex-col lg:flex-row gap-6 mt-5 px-4 md:px-7 flex-wrap">
        <div className="text w-full lg:w-[45%] py-8">
          <div className="big font-extrabold text-3xl md:text-4xl  text-center lg:text-5xl font-mono ">
            Trust In the Fastest & More Reliable Delivery Services
          </div>
          <div className="flex items-center mt-5 justify-center ">
            <div className="center text-center">
              <div className="just text-[#FF9900] font-bold text-2xl md:text-3xl">
                Just Call Us
              </div>
              <div className="butcall mt-3">
                <button className='bg-[#FF5C52] px-4 py-2 text-lg md:text-xl font-medium rounded-lg'>
                  Call Now
                </button>
              </div>
            </div>
          </div>
          <div className="data flex flex-wrap gap-6 mt-6 mx-auto lg:mx-16 justify-center lg:justify-start">
            <div className="data1 text-center">
              <p className="branch font-bold text-2xl md:text-3xl">
                120
              </p>
              <p className='text-sm mt-2'>Branches</p>
            </div>
            <div className="data1 text-center">
              <p className="branch font-bold text-2xl md:text-3xl">
                2M+
              </p>
              <p className='text-sm mt-2'>Clients</p>
            </div>
            <div className="data1 text-center">
              <p className="branch font-bold text-2xl md:text-3xl">
                3,273
              </p>
              <p className='text-sm mt-2'>Support</p>
            </div>
            <div className="data1 text-center">
              <p className="branch font-bold text-2xl md:text-3xl">
                23+
              </p>
              <p className='text-sm mt-2'>Country</p>
            </div>
          </div>
        </div>
        <div className="png flex items-center justify-center w-full lg:w-1/2">
          <div className="image w-full max-w-lg h-auto">
            <img src="src/Static/landing1.png" alt="Delivery Service" />
          </div>
        </div>
      </div>
      <Work />
      <div className="cardss px-4 md:px-8 py-10 flex flex-wrap gap-6 justify-center">
        <Card head='Fastest Delivery' src='src/Static/card1.png' text='Quick delivery with real-time tracking, updates and notifications.' />
        <Card head='Secure Services' src='src/Static/card2.png' text='100% reliable service. We deliver your packages safely and securely.' />
        <Card head='Worldwide Shipping' src='src/Static/card3.png' text='Get your packages delivered anywhere with worldwide shipping.' />
      </div>
      <Choice />
      <div className="px-4 md:px-7 py-4">
        <Feature />
        <div className="text-center mt-5">
          <p className='text-2xl md:text-4xl font-bold'>Help and Support</p>
          <button className='bg-[#FF5C5C] mt-9 px-6 md:px-9 text-lg text-white py-2 rounded-md'>Help</button>
        </div>
        <Update />
      </div>
      <Footer />
    </div>
  )
}

export default Home
