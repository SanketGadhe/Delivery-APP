import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoIosNotificationsOutline } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import Dopdown from "./Dopdown";


const Navbar = () => {
  const [accountdrop, setaccountdrop] = useState(false);
  return (
    <div className="shouldHideOnScroll ">
      <div className="flex justify-between bg-[white] rounded-lg px-4 py-2">
        <div className="left">
          <p>XYZ Delivery</p>
        </div>
        <div className="center">
          <ul className=" list-none flex gap-4">
            <NavLink>
              <li className='hover:text-[#758173]'>Home</li>
            </NavLink>
            <NavLink>
              <li className='hover:text-[#758173]'>MyDeliveries</li>
            </NavLink>
            <NavLink>
              <li className='hover:text-[#758173]'>New Delivery</li>
            </NavLink>
            <NavLink>
              <li className='hover:text-[#758173]'>Track</li>
            </NavLink>
          </ul>
        </div>
        <div className="right">
          <ul className="list-none flex gap-2">
            <NavLink>
              <li>
                <IoIosNotificationsOutline size={"1.4em"} />
              </li>
            </NavLink>
            <li
              onClick={() => {
                setaccountdrop(!accountdrop);
              }}
            >
              <VscAccount size={"1.4em"} />
            </li>
            {
                accountdrop?<Dopdown/>:''
            }
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
