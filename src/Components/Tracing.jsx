
import React from 'react';

const Tracing = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-20 mx-4">
      <h2 className="text-2xl font-bold mb-4">Order Tracking</h2>
      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-teal-500 text-white flex items-center justify-center rounded-full">
            1
          </div>
          <div>
            <h3 className="font-semibold">Order Placed</h3>
            <p>May 15, 2024</p>
          </div>
        </div>
        <div className="text-gray-600">
          <p>Estimated Delivery:</p>
          <p>May 20, 2024</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-500 text-white flex items-center justify-center rounded-full">
            2
          </div>
          <div>
            <h3 className="font-semibold">In Transit</h3>
            <p>Package is on its way to the destination.</p>
          </div>
        </div>
        <div className="text-gray-600">
          <p>Current Location:</p>
          <p>New York, NY</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-500 text-white flex items-center justify-center rounded-full">
            3
          </div>
          <div>
            <h3 className="font-semibold">Delivered</h3>
            <p>Your package has been delivered.</p>
          </div>
        </div>
        <div className="text-gray-600">
          <p>Delivered On:</p>
          <p>May 18, 2024</p>
        </div>
      </div>
    </div>
  );
};

export default Tracing;
