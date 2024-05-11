import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import Dopdown from "./Dopdown";
import { IoMdMenu } from "react-icons/io";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
const Navbar = (props) => {
  const [accountdrop, setaccountdrop] = useState(false);
  
  return (
    <div className="shouldHideOnScroll z-10 ">
      <div className="mobilenav z-10  w-full flex justify-between px-3 py-2 bg-white md:hidden ">
<div className="left flex gap-3 items-center">
<div className="navbut" onClick={()=>{props.setmobilenav(!props.mobilenav)}}><IoMdMenu size={24}/>
</div>
<div className="brandname text-lg font-bold">XYZ Delivery</div>
</div>
<div className="right">
          <ul className="list-none flex gap-2">
            <NavLink>
              <li className=" cursor-pointer">
                <IoIosNotificationsOutline size={"1.4em"} />
              </li>
            </NavLink>
            <li
              onClick={() => {
                setaccountdrop(!accountdrop);
              }}
              className="cursor-pointer"
            >
              <VscAccount size={"1.4em"} />
            </li>
            {
                accountdrop?<Dopdown/>:''
            }
            
          </ul>
        </div>

      </div>
      <div className="flex  z-10 justify-between bg-[white]  w-full rounded-lg px-4 py-2 max-md:hidden">
        <div className="left text-lg font-bold">
          <p>XYZ Delivery</p>
        </div>
        <div className="center">
          <ul className=" list-none flex gap-4">
            <NavLink to={'/Home'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] '>Home
           </li>
            </NavLink>
            <NavLink to={'MyDeliveries'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96]   '>MyDeliveries</li>
            </NavLink>
            <NavLink to={'AddDelivery'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] '>New Delivery</li>
            </NavLink>
            <NavLink to={'Tracking'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] '>Track</li>
            </NavLink>
          </ul>
        </div>
        <div className="right">
          <ul className="list-none flex gap-2">
          {/* <button onClick={props.toggleDarkMode} className="focus:outline-none">
          {props.darkMode ? <MdDarkMode size={24} /> : <MdOutlineDarkMode size={24} /> }
        </button> */}
            <NavLink>
              <li className=" cursor-pointer">
                <IoIosNotificationsOutline size={24} />
              </li>
            </NavLink>
            <li
              onClick={() => {
                setaccountdrop(!accountdrop);
              }}
              className="cursor-pointer"
            >
              <VscAccount size={24} />
            </li>
            {
                accountdrop?<Dopdown/>:''
            }
            
          </ul>
        </div>
      </div>
      {
        props.mobilenav?
        <div className="z-10 bg-[white] rounded-lg px-4 py-2  w-1/2 top-0 h-full fixed">
       
        <div className="center flex justify-between">
          <ul className=" list-none">
            <NavLink to={'/Home'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] m-2'>Home
             </li>
            </NavLink>
            <NavLink to={'MyDeliveries'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] m-2'>MyDeliveries</li>
            </NavLink>
            <NavLink to={'AddDelivery'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] m-2'>New Delivery</li>
            </NavLink>
            <NavLink to={'Tracking'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] m-2'>Track</li>
            </NavLink>
            <NavLink to={'Profile'}>
              <li className='hover:text-[#007d96] m-2'>Profie</li>
            </NavLink>
            <NavLink to={'Help'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] m-2'>Help And Support</li>
            </NavLink>
            <NavLink to={'Login'} className={(e)=>{return e.isActive?'text-xl font-medium text-[#007d96] border-[#007d96] border-b-4 rounded-sm transition-all ':''}}>
              <li className='hover:text-[#007d96] m-2'>Logout</li>
            </NavLink>
           
          </ul>
          <div className="navbut cursor-pointer text-lg " onClick={()=>{props.setmobilenav(!props.mobilenav)}}>
            x
          </div>
        </div>
        
      </div>
        
        :''
      }
    </div>
  );
};

export default Navbar;
