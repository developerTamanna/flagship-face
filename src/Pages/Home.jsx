import React from 'react';
import Hero from '../components/Hero/Hero';
import PhoneContainers from '../components/PhoneContainers/PhoneContainers';
import { useLoaderData } from 'react-router';

const Home = () => {

  const data = useLoaderData()
  console.log(data)

    return (
        <div>
           <Hero></Hero>
            <PhoneContainers
            
            phones = {data}
            ></PhoneContainers>
        </div>
    );
};

export default Home;