import React from 'react';

const TrackingPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Order Tracking</h2>
      
      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Order #123456</h3>
          <p className="text-gray-600">Status: In Transit</p>
        </div>
        <div className="text-gray-600">
          <p>Estimated Delivery:</p>
          <p>May 20, 2024</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Order #789012</h3>
          <p className="text-gray-600">Status: Delivered</p>
        </div>
        <div className="text-gray-600">
          <p>Delivered On:</p>
          <p>May 18, 2024</p>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 rounded-lg p-6 mb-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Order #345678</h3>
          <p className="text-gray-600">Status: Pending</p>
        </div>
        <div className="text-gray-600">
          <p>Estimated Delivery:</p>
          <p>May 25, 2024</p>
        </div>
      </div>

      {/* Complaint Button */}
      <div className="flex justify-center">
        <button className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-red-600 transition-colors">
          Lodge a Complaint
        </button>
      </div>
    </div>
  );
};

export default TrackingPage;
