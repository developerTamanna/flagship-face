import React from 'react';
import { Link } from 'react-router';

const EmptyState = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[70vh] text-center space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">No Data Found!</h2>
            <p className="text-gray-500">Sorry, we couldn’t find any results.</p>
            <Link to="/">
                <button className="px-5 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default EmptyState;
