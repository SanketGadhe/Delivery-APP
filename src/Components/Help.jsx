import React from 'react';

const Help = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-4 m-6">
      <h2 className="text-3xl font-bold mb-8 text-center">Help and Support</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
        <ul className="list-disc list-inside">
          <li className="mb-2">How do I track my order?</li>
          <li className="mb-2">What should I do if my order is delayed?</li>
          <li className="mb-2">How can I contact customer support?</li>
          <li className="mb-2">Can I cancel my order?</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
        <p className="text-gray-600 mb-2">For any further assistance or inquiries, please feel free to contact our customer support team:</p>
        <p className="text-gray-600">Phone: 1-800-123-4567</p>
        <p className="text-gray-600">Email: support@example.com</p>
      </div>
    </div>
  );
};

export default Help;
