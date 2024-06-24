import React from 'react';

const TrackingPage = () => {
  return (
    <div class="container mx-auto p-6">
    <h1 class="text-2xl font-bold text-center mb-6">Parcel Tracking</h1>

    <div class="bg-white rounded-lg shadow-md p-6">
        <div class="flex justify-between items-center mb-4">
            <div>
                <h2 class="text-lg font-semibold">Order ID: <span class="text-blue-500">abc122</span></h2>
            </div>
            <div>
                <h2 class="text-lg font-semibold">Tracking No: <span class="text-blue-500">bahedg727</span></h2>
            </div>
        </div>

        <div class="flex justify-between items-center mb-4">
            <div>
                <h2 class="text-lg font-semibold">Shipped With: <span class="text-blue-500">Best Delivery</span></h2>
            </div>
            <div>
                <h2 class="text-lg font-semibold">Shipping to: <span class="text-blue-500">Mumbai</span></h2>
            </div>
        </div>

        <div class="flex justify-between items-center mb-4">
            <div>
                <h2 class="text-lg font-semibold">Ship Date: <span class="text-blue-500">01/01/2008</span></h2>
            </div>
            <div>
                <h2 class="text-lg font-semibold">Expected Delivery Date: <span class="text-blue-500">04/01/2008</span></h2>
            </div>
        </div>

        <div class="mb-6">
            <h2 class="text-lg font-semibold mb-2">Tracking Status:</h2>
            <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                <p class="font-medium text-gray-600">Shipped</p>
            </div>
            <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                <p class="font-medium text-gray-600">In Transit</p>
            </div>
            <div class="flex items-center">
                <div class="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
                <p class="font-medium text-gray-600">Delivered</p>
            </div>
        </div>

        <div class="mb-6">
            <h2 class="text-lg font-semibold mb-2">Tracking History:</h2>
            <ul class="list-none mb-0">
                <li class="flex items-center mb-2">
                    <div class="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <p class="font-medium text-gray-600">Shipped from warehouse on 01/01/2008</p>
                </li>
                <li class="flex items-center mb-2">
                    <div class="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                    <p class="font-medium text-gray-600">In transit on 02/01/2008</p>
                </li>
                <li class="flex items-center mb-2">
                    <div class="w-4 h-4 rounded-full bg-gray-500 mr-2"></div>
                    <p class="font-medium text-gray-600">Delivered on 04/01/2008</p>
                </li>
            </ul>
        </div>

        <div class="mt-6 text-center">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Track Order
            </button>
        </div>
    </div>
</div>
  );
};

export default TrackingPage;
