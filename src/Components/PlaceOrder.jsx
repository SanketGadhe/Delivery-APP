import React, { useState } from 'react';

const PlaceOrder = () => {
    const [name, setName] = useState('');
    const [fromAddress, setFromAddress] = useState('');
    const [toAddress, setToAddress] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [weight, setWeight] = useState(1);

    const handlePlaceOrder = () => {
        // Logic for placing the order
        alert('Order placed!');
    };

    return (
        <div className="mx-auto max-w-md p-6 bg-white shadow-md rounded-md m-4">
            <h2 className="text-2xl font-semibold mb-4">Place Order</h2>
            <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">From Address</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                    value={fromAddress}
                    onChange={(e) => setFromAddress(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">To Address</label>
                <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                    value={toAddress}
                    onChange={(e) => setToAddress(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block mb-1">Shipping Parts Detail</label>
                <div className="flex items-center">
                    <button className="bg-[#f1f4f8] text-black px-2 py-1 rounded-md mr-2" onClick={() => setQuantity(quantity - 1)}>-</button>
                    <span className="mr-2">{quantity}</span>
                    <button className="bg-[#f1f4f8] text-black px-2 py-1 rounded-md" onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-1">Weight</label>
                <input
                    type="number"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <button
                className="bg-[#00968a] text-white px-4 py-2 rounded-md hover:bg-[#00514a] transition-colors"
                onClick={handlePlaceOrder}
            >
                Place Order
            </button>
        </div>
    );
};

export default PlaceOrder;
