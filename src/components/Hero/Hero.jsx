import React from 'react';
import bannerImg from '../../assets/banner (1).png'
const Hero = () => {
    return (
        <div>
           <div className='py-12'>
           <img className='w-full mx-auto md:max-w-md' src={bannerImg} alt="banner-img"/>
           </div>
           <div className='text-center space-y-4'>
               <h1 className='font-thin text-5xl text-gray-900'>Browse, Search, View, Buy</h1>
               <p className='text-gray-500'>
                Best Place To Browse, Search, View details and purchase of top flagship phones <br></br> of the current time-flagshipFaceOff
               </p>
<form className="flex flex-col md:flex-row justify-center items-center mb-4 md:px-24 gap-4">
  <input 
    type="text" 
    placeholder="Search phone by name" 
    className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
  />
  
  <button 
    type="submit" 
    className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition duration-300 shadow-sm cursor-pointer"
  >
    Search
  </button>
</form>

           </div>
            
        </div>
    );
};

export default Hero;