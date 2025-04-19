import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import '../app.css';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
const MainLayout = () => {
    return (
        <>
<div>
    <Navbar></Navbar>
    
    <div className=' min-h-[calc(100vh-116px)]'>
    <div className='max-w-screen-2xl mx-auto px-8 md:px-12 lg:px-16 xl:px-24'>
    <Outlet></Outlet>
    </div>
    </div>
    <Footer></Footer>
</div>
        
        
        </>
    );
};

export default MainLayout;