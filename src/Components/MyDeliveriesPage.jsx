import React from 'react';

const MyDeliveriesPage = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4">
      <h2 className="text-3xl font-bold mb-8 text-center">My Deliveries</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Sample Delivery Card */}
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Delivery #1</h3>
            <p className="text-gray-600">Status: In Transit</p>
          </div>
          <div className="mt-4 text-gray-600">
            <p>Estimated Delivery:</p>
            <p>May 20, 2024</p>
          </div>
        </div>

        {/* Sample Delivery Card */}
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Delivery #2</h3>
            <p className="text-gray-600">Status: Delivered</p>
          </div>
          <div className="mt-4 text-gray-600">
            <p>Delivered On:</p>
            <p>May 18, 2024</p>
          </div>
        </div>

        {/* Sample Delivery Card */}
        <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-4">Delivery #3</h3>
            <p className="text-gray-600">Status: Pending</p>
          </div>
          <div className="mt-4 text-gray-600">
            <p>Estimated Delivery:</p>
            <p>May 25, 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDeliveriesPage;
