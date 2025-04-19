import React from 'react';
import { Outlet } from 'react-router';

const Favorite = () => {
    return (
        <div>
            <h1>this is favorite page</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Favorite;