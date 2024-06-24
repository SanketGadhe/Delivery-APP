import React from 'react';
import { Link } from 'react-router-dom';
import { CiLogout } from 'react-icons/ci';
import { MdOutlineContactSupport } from 'react-icons/md';

const Dropdown = () => {
  return (
    <div className="rounded-lg absolute top-20 right-0 bg-white shadow-md transition-all z-10">
      <ul>
        <li className="py-2 px-4 hover:bg-gray-100">
          <Link to="/Profile" className="flex items-center space-x-2">
            <span className="text-gray-800">Profile</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-100">
          <Link to="/Help" className="flex items-center space-x-2">
            <MdOutlineContactSupport className="text-gray-600" />
            <span className="text-gray-800">Help</span>
          </Link>
        </li>
        <li className="py-2 px-4 hover:bg-gray-100">
          <Link to="/Login" className="flex items-center space-x-2">
            <CiLogout className="text-gray-600" />
            <span className="text-gray-800">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
