import React from 'react'
import Carousel from './Carousel'
import Card from './Card'

const Home = () => {
  return (
    <div className='home '>
      <div className="carousel">
      <Carousel images={['src/Static/1.jpg','src/Static/2.jpg','src/Static/3.jpg']}/></div>
    <div className="cards flex justify-center ">
      <div className="center md:flex ">
<Card name={'Orders'} heading={'Place Order'} url='/AddDelivery' about={'Stay in the loop! Follow packages from pickup to drop-off. From essentials to surprises, know their status every step'}/>
<Card name={'Nearby Delivery'} heading={'Check Nearby Delivery'} url='/MyDeliveries' about={'Stay in the loop! Follow packages from pickup to drop-off. From essentials to surprises, know their status every step'}/>
<Card name={'Shipping'} heading={'Check Shipping'} url='/Tracking' about={'Stay in the loop! Follow packages from pickup to drop-off. From essentials to surprises, know their status every step'}/>
<Card name={'Help'} heading={'Help and Support'} url='/Help' about={'Stay in the loop! Follow packages from pickup to drop-off. From essentials to surprises, know their status every step'}/></div>
    </div>
    </div>
  )
}

export default Home
