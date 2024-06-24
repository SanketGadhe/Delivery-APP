import React, { useState } from "react";
import UseButton from "../UseButton";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");
  const handleSubmit = (e) => {
    if (password != confirmpassword) {
      alert("Password Not matched");
    }
    e.preventDefault();
    // Here you can perform form validation and submit data to backend
    console.log("Form submitted:", { email, password });
    // Reset form fields after submission
  };
  return (
    <div className="flex p-5 justify-center items-center">
      <div className="flex flex-col lg:flex-row gap-4 flex-wrap  rounded-lg p-5 lg:p-3">
        <div className="img w-full lg:w-[45%] md:flex justify-center items-center hidden lg:block">
          <img src="src/Static/login.png" className="w-full" alt="Login" />
        </div>
        <div className="formside w-full lg:w-1/2 py-4 px-4 lg:mt-4">
          <h1 className="text-2xl lg:text-3xl font-semibold">
            Welcome to &nbsp;
            <span className="text-[#FF5555]">Best Delivery</span>
          </h1>
          <p className="text-base lg:text-lg mt-5 font-semibold">
            To keep connected with us, please log in with your personal
            information using your email ID and password.
          </p>
          <div className="boxround p-5 bg-white border-black border-2 rounded-3xl mt-5 w-full lg:w-[80%]">
            <div className="form">
              <input
                input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full lg:w-3/4 p-2 bg-[#FF5555] mb-3 font-semibold text-sm lg:text-base px-6 py-3 rounded-md focus:outline-none placeholder:text-[#ffffffde] text-[#ffffffde] focus:border-black"
                placeholder="Enter Email/Username"
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="block w-full lg:w-3/4 p-2 bg-[#FF5555] mb-3 font-semibold text-sm lg:text-base px-6 py-3 rounded-md focus:outline-none placeholder:text-[#ffffffde] text-[#ffffffde] focus:border-black"
                placeholder="Password"
              />
              <input
                type="password"
                id="confirmpassword"
                value={confirmpassword}
                onChange={(e) => setconfirmpassword(e.target.value)}
                required
                className="block w-full lg:w-3/4 p-2 bg-[#FF5555] mb-3 font-semibold text-sm lg:text-base px-6 py-3 rounded-md focus:outline-none placeholder:text-[#ffffffde] text-[#ffffffde] focus:border-black"
                placeholder="Confirm Password"
              />
            </div>
            <div className="forglo flex justify-between items-center mt-4">
              <div className="forget text-sm lg:text-base text-black font-semibold">
                <NavLink to="/Login">Already have an account? </NavLink>
              </div>
              <div className="loginbut" onClick={handleSubmit}>
                <NavLink to={"/Home"}>
                  <button className="bg-[#FF5C5C] px-6 lg:px-9 text-lg text-white py-2 rounded-md">
                    Register
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //     <div className="flex justify-center items-center">

    //     <div className='py-16 px-8'>
    //     <div className="company text-xl font-semibold px-2">XYZ Delivery</div>
    //   <div className="mainbox">
    //       <div className="welcome text-[32px] font-light pt-4 "><p>Get Started</p>
    //       </div>
    //       <div className="formbox">
    //         <form onSubmit={handleSubmit}>
    //           <div className="logininf text-[#8b97a2] text-[18px]  font-medium"><p>Create Your account below.</p></div>
    //       <div className="form">
    //       <label htmlFor="email" class="text-xs text-[#8b97a2]">Email Address</label>
    // <input type="email" id="email" value={email}
    //             onChange={(e) => setEmail(e.target.value)}
    //             required class="block w-full  p-2  border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter Your email..." />

    // <label htmlFor="password" class="text-xs text-[#8b97a2] mt-4">Password</label>
    // <input type="password" id='password'  value={password}
    //             onChange={(e) => setPassword(e.target.value)}
    //             required class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter your password..." />

    // <label htmlFor="confirmpassword" class="text-xs text-[#8b97a2] mt-4">Confirm Password</label>
    // <input type="password" id='confirmpassword'  value={confirmpassword}
    //             onChange={(e) => setconfirmpassword(e.target.value)}
    //             required class="block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-black" placeholder="Enter your password..." />
    // </div>
    // <div className="forglo flex justify-between py-5">
    //   <div className="forget text-[14px] font-[400-Normal] text-[#8b97a2]"><a > Forget Password?</a></div>
    //   <div className="loginbut" onClick={handleSubmit}> <Link to={'/Login'}><UseButton content={'Create Account'} color={"#00968a"} textcolor={'#ffff'}/></Link></div>
    // </div>
    // <div className="notacc flex text-[14px] font-[400-Normal] justify-between bg-white rounded-2xl px-6 py-3">

    // <Link to={'/Login'} className='text-[#00968A] flex justify-center items-center gap-1'> <FaArrowLeft color={'#00968A'}/> Login</Link>
    // <p className=''>Already have an account? </p>
    // </div>

    // </form>  </div>
    //       <div className="guest flex justify-center mt-5">
    //           <UseButton content={'Continue as Guest'} color={'#111417'} textcolor={'#ffff'}/>
    //       </div>
    //   </div>
    //   </div>
    //   </div>
  );
};

export default Signin;
