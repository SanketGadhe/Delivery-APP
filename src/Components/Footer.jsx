import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-[#FF5C5C] w-full flex flex-col lg:flex-row p-5 lg:p-10'>
      <div className="img w-full lg:w-1/2 flex justify-center lg:justify-start">
        <img src="src/Static/footer.png" className='w-full max-w-sm lg:max-w-md' alt="Footer Graphic" />
      </div>
      <div className="text mt-5 lg:mt-10 w-full lg:w-1/2">
        <p className="text-xl lg:text-2xl underline font-bold m-3">Contact Us</p>
        <p className="text-base lg:text-lg underline font-bold m-3">
          <NavLink>
            For any further assistance or inquiries, please feel free to contact our customer support team:
          </NavLink>
        </p>
        <p className="text-base lg:text-lg underline font-bold m-3">
          Phone: <NavLink>1-800-123-4567</NavLink>
        </p>
        <p className="text-base lg:text-lg underline font-bold m-3">
          Email: <NavLink>support@example.com</NavLink>
        </p>
        <div className="social flex justify-center lg:justify-end gap-2 mt-5 lg:mt-10">
          <img src="src/Static/social2.png" className='w-8 h-8 lg:w-10 lg:h-10' alt="Social Icon" />
          <img src="src/Static/social5.png" className='w-8 h-8 lg:w-10 lg:h-10' alt="Social Icon" />
          <img src="src/Static/social6.png" className='w-8 h-8 lg:w-10 lg:h-10' alt="Social Icon" />
          <img src="src/Static/social7.png" className='w-8 h-8 lg:w-10 lg:h-10' alt="Social Icon" />
        </div>
      </div>
    </div>
  )
}

export default Footer
