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
        <div className="placeorder">

      
        <div className="flex flex-col sm:flex-row mx-6 gap-10">
            {/* Left section */}
            <div className="sm:w-[45%] relative">
                <img src="src/static/ted.png" alt="" className="w-full h-screen block" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:max-w-md w-full px-4">
                    <h2 className="text-2xl font-semibold mb-2">Place Order</h2>
                    <div className="mb-2">
                        <label className="block mb-1">Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">From Address</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                            value={fromAddress}
                            onChange={(e) => setFromAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">To Address</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                            value={toAddress}
                            onChange={(e) => setToAddress(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">Shipping Parts Detail</label>
                        <div className="flex items-center">
                            <button
                                className="bg-[#f1f4f8] text-black px-2 py-1 rounded-md mr-2"
                                onClick={() => setQuantity(quantity - 1)}
                            >
                                -
                            </button>
                            <span className="mr-2">{quantity}</span>
                            <button
                                className="bg-[#f1f4f8] text-black px-2 py-1 rounded-md"
                                onClick={() => setQuantity(quantity + 1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label className="block mb-1">Weight</label>
                        <input
                            type="number"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button
                            className="bg-[#FF5C5C] text-white px-4 py-2 rounded-md hover:bg-[#f94545] transition-colors"
                            onClick={handlePlaceOrder}
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
            {/* Right section */}
            <div className="sm:w-1/3 flex justify-center">
                <div className="product w-full max-w-md">
                    <div className="cover">
                        <h1 className="text-3xl font-bold text-center">Order Detail</h1>
                        <div className="boxwithimg flex gap-3 items-center mt-5 bg-white border-gray-400 border-2 rounded-lg py-5 px-2">
                            <img src="src/Static/footer.png" alt="" className="rounded-lg w-28 h-16" />
                            <div className="quan text-xl font-medium">
                                <p className="mb-1">Quantity</p>
                                <p className="mb-1">3</p>
                            </div>
                            <div className="price text-xl font-medium">
                                <p className="mb-1">Price</p>
                                <p className="mb-1">40000</p>
                            </div>
                        </div>
                        <div className="pricess mt-4">
                            <h1 className="text-xl font-bold">Total Price</h1>
                            <div className="boxprice bg-white rounded-xl border-gray-400 border-2 px-3 py-4">
                                <ul className="text-sm text-gray-400 font-medium">
                                    <li className="flex justify-between mt-2">
                                        <span>Product Price</span>
                                        <span>299</span>
                                    </li>
                                    <li className="flex justify-between mt-2">
                                        <span>No of Products</span>
                                        <span>2</span>
                                    </li>
                                    <li className="flex justify-between mt-2">
                                        <span>G.S.T</span>
                                        <span>18%</span>
                                    </li>
                                    <li className="flex justify-between mt-2">
                                        <span>Delivery Charges</span>
                                        <span>0</span>
                                    </li>
                                    <li className="flex justify-between mt-2">
                                        <span>Total</span>
                                        <span>620</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imgsec w-1/3">
                <img src="src/static/lau.png" alt="" />
            </div>
        </div> 
        <div className="flex justify-center">
            <div>
            <div className="boxseller">
                <textarea name="seller mesage" placeholder='Write a message to the delivery boy' id="" className='px-4 py-3 text-sm rounded-3xl' cols={50} rows={10}></textarea>
                <button
                            className="bg-[#FF5C5C] block text-white px-4 py-2 rounded-md hover:bg-[#f94545] transition-colors"
                            onClick={handlePlaceOrder}
                        >
                           Submit
                        </button>
            </div></div>
        </div>
         </div>
    );
};

export default PlaceOrder;
