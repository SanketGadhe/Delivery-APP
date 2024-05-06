import React from 'react'
import UseButton from '../UseButton'
import { FaArrowLeft } from "react-icons/fa6";

const Signin = () => {
  return (
    <div className='py-16 px-8'>
    <div className="company text-xl font-semibold px-2">XYZ Delivery</div>
  <div className="mainbox">
      <div className="welcome text-[32px] font-light pt-4 "><p>Get Started</p>
      </div>
      <div className="formbox">
          <div className="logininf text-[#8b97a2] text-[18px]  font-medium"><p>Create Your account below.</p></div>
      <div className="form">
      <label htmlFor="email" class="text-xs text-[#8b97a2]">Email Address</label>
<input type="email" id="email" class="block w-full  p-2  border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your email..." />

<label htmlFor="password" class="text-xs text-[#8b97a2] mt-4">Password</label>
<input type="password" id='password' class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter your password..." />

<label htmlFor="confirmpassword" class="text-xs text-[#8b97a2] mt-4">Confirm Password</label>
<input type="password" id='confirmpassword' class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter your password..." />
</div>
<div className="forglo flex justify-between py-5">
  <div className="forget text-[14px] font-[400-Normal] text-[#8b97a2]"><a > Forget Password?</a></div>
  <div className="loginbut"><UseButton content={'Create Account'} color={"#00968a"} textcolor={'#ffff'}/></div>
</div>
<div className="notacc flex text-[14px] font-[400-Normal] justify-between bg-white rounded-2xl px-6 py-3">
<a className='text-[#00968A] flex justify-center items-center gap-1'> <FaArrowLeft color={'#00968A'}/> Create</a>
<p className=''>Already have an account? </p>
</div>
      </div>
      <div className="guest flex justify-center mt-5">
          <UseButton content={'Continue as Guest'} color={'#111417'} textcolor={'#ffff'}/>
      </div>
  </div>
  </div>
  )
}

export default Signin
