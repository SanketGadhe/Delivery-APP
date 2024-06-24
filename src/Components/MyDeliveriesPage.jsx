import React from 'react';

const MyDeliveriesPage = () => {
  return (
    <div className=" min-h-screen py-8 px-4">
  <div className="text-center text-2xl font-bold mb-8">My Deliveries</div>
  <div className="flex justify-center mb-4">
    <div className="flex space-x-4 flex-wrap gap-3">
      <button className="bg-gray-200 px-4 py-2 rounded-md">All Purchases</button>
      <button className="bg-gray-200 px-4 py-2 rounded-md">To Pay</button>
      <button className="bg-gray-200 px-4 py-2 rounded-md">To Shopping</button>
      <button className="bg-gray-200 px-4 py-2 rounded-md">To Receive</button>
      <button className="bg-gray-200 px-4 py-2 rounded-md">Completed</button>
      <button className="bg-gray-200 px-4 py-2 rounded-md">Canceled</button>
    </div>
  </div>
  <div className=" rounded-md  p-4 mb-4">
    <div className="text-xl font-semibold mb-2">Purchases History</div>
    <p className="text-gray-600 text-sm">Manage and create great shopping experience for you.</p>
    <div className="flex items-center mt-4">
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      <input type="text" placeholder="Search your product name, order id, etc." className="ml-2 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50 w-full" />
    </div>
  </div>
  <div className="bg-white rounded-md shadow-md p-4 mb-4">
    <div className="flex items-center mb-4 gap-2">
      <img src="src/static/rolex.png"  alt="French Perfume" className="w-24 h-24 rounded-md mr-4" />
      <div>
        <h2 className="text-lg font-semibold">French Perfume</h2>
        <p className="text-gray-600 text-sm">90 ml</p>
      </div>
      <div className="ml-auto flex items-center">
        <span className="text-gray-600 text-sm line-through">350 Rs</span>
        <span className="text-green-500 text-sm ml-2">299 Rs</span>
      </div>
    </div>
    <div className="flex justify-between">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Order Details</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancel Order</button>
    </div>
    <p className="text-gray-600 text-sm mt-2">Chat with your Customer Support</p>
  </div>
  <div className="bg-white rounded-md shadow-md p-4 mb-4">
    <div className="flex items-center mb-4 gap-2">
      <img src="src/static/rolex.png" alt="French Perfume" className="rounded-md w-24 h-24 mr-4" />
      <div>
        <h2 className="text-lg font-semibold">French Perfume</h2>
        <p className="text-gray-600 text-sm">90 ml</p>
      </div>
      <div className="ml-auto flex items-center">
        <span className="text-gray-600 text-sm line-through">350 Rs</span>
        <span className="text-green-500 text-sm ml-2">299 Rs</span>
      </div>
    </div>
    <div className="flex justify-between">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Order Details</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancel Order</button>
    </div>
    <p className="text-gray-600 text-sm mt-2">Chat with your Customer Support</p>
  </div>
  <div className="bg-white rounded-md shadow-md p-4 mb-4">
    <div className="flex items-center mb-4">
      <img src="src/static/image.png" alt="Rolex Watch" className="rounded-md mr-4 w-24 h-24" />
      <div>
        <h2 className="text-lg font-semibold">Rolex Watch</h2>
        <p className="text-gray-600 text-sm">20 Size</p>
      </div>
      <div className="ml-auto flex items-center">
        <span className="text-gray-600 text-sm line-through">399 Rs</span>
        <span className="text-green-500 text-sm ml-2">329 Rs</span>
      </div>
    </div>
    <div className="flex justify-between">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">View Order Details</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Cancel Order</button>
    </div>
    <p className="text-gray-600 text-sm mt-2">Chat with your Customer Support</p>
  </div>
</div>
  );
};

export default MyDeliveriesPage;
