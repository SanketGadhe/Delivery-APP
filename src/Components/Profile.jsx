import React, { useState } from 'react';

const Profile = () => {
    const [name, setName] = useState('Aaryan');
    const [phoneNumber, setPhoneNumber] = useState('123-456-7890');
    const [email, setEmail] = useState('aaryan@gmail.com');
    const [address, setAddress] = useState('123 Main St, City, Country');

    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Save changes to the profile
        setIsEditing(false);
    };

    return (
        <div className="mx-auto max-w-md p-6 bg-white shadow-md rounded-md mt-4">
            <h2 className="text-2xl font-semibold mb-4">User Profile</h2>
            <div className="mb-4">
                <label className="block mb-1">Name</label>
                {isEditing ? (
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                ) : (
                    <p>{name}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block mb-1">Phone Number</label>
                {isEditing ? (
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                ) : (
                    <p>{phoneNumber}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block mb-1">Email Address</label>
                {isEditing ? (
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                ) : (
                    <p>{email}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block mb-1">Home Address</label>
                {isEditing ? (
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-black"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                ) : (
                    <p>{address}</p>
                )}
            </div>
            <div className="flex justify-end">
                {isEditing ? (
                    <button
                        className="bg-[#00968a] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#00514a] transition-colors"
                        onClick={handleSave}
                    >
                        Save
                    </button>
                ) : (
                    <button
                        className="bg-[#00968a] text-white px-4 py-2 rounded-md mr-2 hover:bg-[#00514a] transition-colors"
                        onClick={handleEdit}
                    >
                        Edit
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;
