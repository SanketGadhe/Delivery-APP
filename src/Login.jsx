import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

const Login = (props) => {
  const [lemail, setlemail] = useState('')
  const [lpassword, setlpassword] = useState('')
  const handleSubmit = (e) => {
     e.preventDefault();
  };

  return (
    <div className="flex p-5 justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-4 flex-wrap  rounded-lg p-5 lg:p-3">
        <div className="img w-full lg:w-[45%] md:flex justify-center items-center hidden lg:block">
          <img src="src/Static/login.png" className="w-full" alt="Login" />
        </div>
        <div className="formside w-full lg:w-1/2 py-4 px-4 lg:mt-4">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Welcome to
            &nbsp;<span className="text-[#FF5555]">Best Delivery</span>
          </h1>
          <p className="text-base lg:text-lg mt-5 font-semibold">
            To keep connected with us, please log in with your personal information using your email ID and password.
          </p>
          <div className="boxround p-5 bg-white border-black border-2 rounded-3xl mt-5 w-full lg:w-[80%]">
            <div className="form">
              <input 
                type="email" 
                id="email"  
                value={lemail}
                onChange={(e) => setlemail(e.target.value)} 
                className="block w-full lg:w-3/4 p-2 bg-[#FF5555] mb-3 font-semibold text-sm lg:text-base px-6 py-3 rounded-md focus:outline-none placeholder:text-[#ffffffde] text-[#ffffffde] focus:border-black" 
                placeholder="Enter Email/Username" 
              />
              <input 
                type="password" 
                id='password'  
                value={lpassword}
                onChange={(e) => setlpassword(e.target.value)} 
                className="block w-full lg:w-3/4 p-2 bg-[#FF5555] mb-3 font-semibold text-sm lg:text-base px-6 py-3 rounded-md focus:outline-none placeholder:text-[#ffffffde] text-[#ffffffde] focus:border-black" 
                placeholder="Password" 
              />
            </div>
            <div className="forglo flex justify-between items-center mt-4">
              <div className="forget text-sm lg:text-base text-black font-semibold">
                <a href="#">Forget Password?</a>
              </div>
              <div className="loginbut" onClick={handleSubmit}>
                <NavLink to={'/Home'}>
                  <button className='bg-[#FF5C5C] px-6 lg:px-9 text-lg text-white py-2 rounded-md'>Log In</button>
                </NavLink>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Login
