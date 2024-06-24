
import React from 'react';

const Tracing = () => {
  return (
    <div class="container mx-auto p-4 pt-6 md:p-6 lg:p-12 bg-white rounded shadow-md">
 
  <div class="flex justify-between mb-4">
    <h1 class="text-2xl font-bold">My Deliveries</h1>
    <p class="text-sm text-gray-600">Varge and create great shopping experience for you</p>
  </div>

  <div class="flex flex-wrap -mx-4 mb-4">
    <div class="w-full md:w-1/2 xl:w-1/3 p-4">
      <div class="bg-white rounded shadow-md p-4">
        <h2 class="text-lg font-bold">French Perfume</h2>
        <p class="text-sm text-gray-600">90 ml</p>
        <p class="text-sm text-gray-600">View Order Deals</p>
        <p class="text-sm text-gray-600">Chat with your Customer Support</p>
        <p class="text-sm text-gray-600">View Order Details</p>
      </div>
    </div>
    <div class="w-full md:w-1/2 xl:w-1/3 p-4">
      <div class="bg-white rounded shadow-md p-4">
        <h2 class="text-lg font-bold">Rolex Watch</h2>
        <p class="text-sm text-gray-600">20 Size</p>
        <p class="text-sm text-gray-600">350 - Rs 299 Rs</p>
        <p class="text-sm text-gray-600">Cancel Order</p>
      </div>
    </div>
  </div>
  <div class="flex justify-between mb-4">
    <a href="#" class="text-sm text-gray-600">My Deliveries</a>
    <a href="#" class="text-sm text-gray-600">All Purchases</a>
    <a href="#" class="text-sm text-gray-600">To Pay</a>
    <a href="#" class="text-sm text-gray-600">To Shopping</a>
    <a href="#" class="text-sm text-gray-600">To Receive !!!</a>
  </div>

  <div class="flex justify-between mb-4">
    <a href="#" class="text-sm text-gray-600">Completed</a>
    <a href="#" class="text-sm text-gray-600">Canceled</a>
    <a href="#" class="text-sm text-gray-600">Purchases History</a>
  </div>
</div>
  );
};

export default Tracing;
