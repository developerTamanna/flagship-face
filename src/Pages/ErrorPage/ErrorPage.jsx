import React from 'react';

import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
<div>
<Navbar></Navbar>
<div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center p-4">
    <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
    <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
    <p className="text-gray-600 mb-6">
        দুঃখিত! আপনি যে পেজ খুঁজছেন তা পাওয়া যায়নি।
    </p>
    <Link
        to="/"
        className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
    >
        Back to Home
    </Link>
</div>
</div>
    );
};

export default ErrorPage;
