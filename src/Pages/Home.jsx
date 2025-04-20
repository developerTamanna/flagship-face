import React, { useState } from 'react';
import Hero from '../components/Hero/Hero';
import PhoneContainers from '../components/PhoneContainers/PhoneContainers';
import { useLoaderData } from 'react-router';

const Home = () => {

  const data = useLoaderData()
//   console.log(data)

const [phones, setPhones] = useState(data)
const handleSearch = (event, text)=>{
 event.preventDefault();

 if(text === '') return setPhones(data)
//  console.log(text)
const searchPhones = data.filter(phone => 
    phone?.name?.toLowerCase().split(' ').includes(text.toLowerCase()) ||
    phone?.brand?.toLowerCase().split(' ').includes(text.toLowerCase())
  );
  
setPhones(searchPhones)

}

    return (
        <div>
           <Hero
           handleSearch = {handleSearch}
           ></Hero>
            <PhoneContainers
            
            phones = {phones}
            ></PhoneContainers>
        </div>
    );
};

export default Home;