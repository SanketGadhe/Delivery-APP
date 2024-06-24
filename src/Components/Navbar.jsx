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
const siglog =location.pathname === '/login' ||location.pathname === '/Login' || location.pathname === '/Register';
  return (
    <div className="shouldHideOnScroll z-10 ">
      <div className="mobilenav z-10  w-full flex justify-between px-3 py-2 bg-white md:hidden ">
        <div className="left flex gap-3 items-center">
          <div
            className="navbut"
            onClick={() => {
              props.setmobilenav(!props.mobilenav);
            }}
          >
            <IoMdMenu size={24} />
          </div>
          <div className="brandname text-lg font-bold">XYZ Delivery</div>
        </div>
        <div className="right">
        <ul className="list-none flex gap-2 ">
            <NavLink to={'Home'}>
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
            {accountdrop ? <Dopdown /> : ""}
          </ul>
        </div>
      </div>
      <div className="flex  z-10 justify-between items-center w-full rounded-lg  max-md:hidden py-7 px-7">
        <div className="left text-[32px] font-bold text-[#FF5C00]">
          <p>XYZ Delivery</p>
        </div>
        <div className="center">
          <ul className=" list-none flex gap-4 items-center">
          {siglog?<div className="simple list-none flex gap-4 items-center"><NavLink to={"/Login"}>
              <li className= "px-3 text-lg py-2 font-bold rounded-md ">Log In</li>
            </NavLink>
            <NavLink to={"/Register"}>
              <li className= "bg-[#FF5C5C] px-5 font-bold  text-lg py-2 rounded-md ">Sign up</li>
            </NavLink>
            </div>
            :<div className="simple list-none flex gap-4 items-center"> <NavLink
              to={"/Home"}
              className={(e) => {
                return e.isActive
                  ? "font-bold text-[#FF5C00]  transition-all "
                  : "";
              }}
            >
              <li className="hover:text-[#FF5C00] text-[20px] ">Home</li>
            </NavLink>
            <NavLink
              to={"MyDeliveries"}
              className={(e) => {
                return e.isActive
                  ? " font-bold text-[#FF5C00]  transition-all "
                  : "";
              }}
            >
              <li className="hover:text-[#FF5C00] text-[20px]  ">
                MyDeliveries
              </li>
            </NavLink>
            <NavLink
              to={"AddDelivery"}
              className={(e) => {
                return e.isActive
                  ? " font-bold text-[#FF5C00]  transition-all "
                  : "";
              }}
            >
              <li className="hover:text-[#FF5C00] text-[20px]">New Delivery</li>
            </NavLink>
           

            <NavLink
              to={"Tracking"}
              className={(e) => {
                return e.isActive
                ? " font-bold text-[#FF5C00]  transition-all "
                : "";
              }}
              >
              <li className="hover:text-[#FF5C00] text-[20px] ">Track</li>
            </NavLink>
            <NavLink to={"/Login"}>
              <li className="bg-[#FF5C5C] px-3 text-lg py-2 rounded-md ">Login/Signup</li>
            </NavLink>
              </div>}

           
            <NavLink to={'Home'}>
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
              {accountdrop ? <Dopdown /> : ""}
          </ul>
        </div>
      </div>
      {props.mobilenav ? (
        <div className="z-10 bg-[white] rounded-lg px-4 py-2  w-1/2 top-0 h-full fixed">
          <div className="center flex justify-between float-end">
            <div
              className="navbut cursor-pointer text-lg font-bold "
              onClick={() => {
                props.setmobilenav(!props.mobilenav);
              }}
            >
              x
            </div>
          </div>
          <div className="flex-col">
          <ul className="mt-10 px-4 py-5">   <NavLink
              to={"/Home"}
              className={(e) => {
                return e.isActive
                  ? "font-bold text-[#FF5C00]  transition-all "
                  : "";
              }}
            >
              <li className="hover:text-[#FF5C00] text-[20px] ">Home</li>
            </NavLink>
            <NavLink
              to={"MyDeliveries"}
              className={(e) => {
                return e.isActive
                  ? " font-bold text-[#FF5C00]  transition-all "
                  : "";
              }}
            >
              <li className="hover:text-[#FF5C00] text-[20px] mt-3 ">
                MyDeliveries
              </li>
            </NavLink>
            <NavLink
              to={"AddDelivery"}
              className={(e) => {
                return e.isActive
                  ? " font-bold text-[#FF5C00]  transition-all "
                  : "";
              }}
            >
              <li className="hover:text-[#FF5C00] text-[20px] mt-3">New Delivery</li>
            </NavLink>
           

            <NavLink
              to={"Tracking"}
              className={(e) => {
                return e.isActive
                ? " font-bold text-[#FF5C00]  transition-all "
                : "";
              }}
              >
              <li className="hover:text-[#FF5C00] text-[20px] mt-3">Track</li>
            </NavLink>
            <NavLink to={"/Login"}>
              <li className="bg-[#FF5C5C] px-3 text-lg py-2 rounded-md mt-3">Login/Signup</li>
            </NavLink>

            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navbar;
