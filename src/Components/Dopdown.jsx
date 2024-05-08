import React from 'react'
import { Link } from 'react-router-dom'
import { CiLogout } from "react-icons/ci";
import { MdOutlineContactSupport } from "react-icons/md";
const Dopdown = () => {
  return (
    <div className="list-none rounded-b-lg absolute top-10 right-0 bg-white transition-all">
                <ul>
                  <li className='py-1 px-2 hover:bg-[#E6E6E6]'>
                    <Link>Profile</Link></li>
                    <Link>  <li className='py-1 px-2 hover:bg-[#E6E6E6] flex items-center' ><MdOutlineContactSupport />Help</li></Link>
                    <Link><li className='py-1 px-2 hover:bg-[#E6E6E6] flex  items-center'><CiLogout />Logout</li></Link>
                </ul>
              </div>
  )
}

export default Dopdown
