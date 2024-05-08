import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import UseButton from './UseButton'
import { FaArrowRight } from "react-icons/fa6";
const Login = (props) => {
  const [lemail, setlemail] = useState('')
  const [lpassword, setlpassword] = useState('')
  const handleSubmit = (e) => {
   
    e.preventDefault();
    if(lemail==props.email   ){

    }
    else if(lpassword==props.password){
      
    }
    else{
      alert('User email or paswword is Incorrect')
    }
    // Here you can perform form validation and submit data to backend
    // Reset form fields after submission
  };
  return (
    <div className="flex justify-center items-center">
    <div className='py-16 px-8 '>
      
      <div className="company text-xl font-semibold px-2">XYZ Delivery</div>
    <div className="mainbox">
        <div className="welcome text-[32px] font-[300-light] pt-4 "><p>Welcome back</p>
        </div>
        <div className="formbox">
            <div className="logininf text-[#8b97a2] text-[18px] font-medium"><p>Login to access Your account below</p></div>
        <div className="form">
        <label htmlFor="email" class="text-xs text-[#8b97a2]">Email Address</label>
<input type="email" id="email"  value={lemail}
            onChange={(e) => setlemail(e.target.value)} class="block w-full  p-2  border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your email..." />

<label htmlFor="password" class="text-xs text-[#8b97a2] mt-4">Password</label>
<input type="password" id='password'  value={lpassword}
            onChange={(e) => setlpassword(e.target.value)} class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter your password..." />
</div>
<div className="forglo flex justify-between py-5">
    <div className="forget text-[14px] font-[400-Normal] text-[#8b97a2]"><a > Forget Password?</a></div>
    <div className="loginbut" onClick={handleSubmit}><UseButton content={'Login'} color={"#00968a"} textcolor={'#ffff'}/></div>
</div>
<div className="notacc flex text-[14px] font-[400-Normal] justify-between bg-white rounded-2xl px-6 py-3">
<p className=''>Don't have an account? </p>
<Link to={'/Register'}className='text-[#00968A] flex justify-center items-center gap-1'>Create <FaArrowRight color={'#00968A'}/></Link>
</div>
        </div>
        <div className="guest flex justify-center mt-5">
            <UseButton content={'Continue as Guest'} color={'#111417'} textcolor={'#ffff'}/>
        </div>
    </div>
    </div></div>
  )
}

export default Login
