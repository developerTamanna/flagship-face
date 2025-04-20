import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import Button from '../Ui/Button';


const PhoneContainers = ({phones}) => {

    const [displayPhones, setDisplayPhones] = useState([]);

   //button er jnno

   const [showAll, setShowAll] = useState(false);
//useEffect

useEffect(()=>{

  if(showAll){
    setDisplayPhones(phones)
  }
  else{
    setDisplayPhones(phones.slice(0, 6))
  }
},[phones, showAll])

    // console.log(phones)
    return (
        <div className='py-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
              
                    {/* {
        phones.map(phone => (
            <PhoneCard
            
        phone={phone} 
        key={phone.id} />
        ))
        } */}

        {
            displayPhones.map(phone=><PhoneCard
            key={phone.id}
            phone={phone}
            ></PhoneCard>)
        }
            
            </div>
      

<Button type='submit' onClick={()=>{
                setShowAll(prv => !prv)
                if(showAll) window.scrollTo({ top: 0, behavior: "smooth" })
            }} label={showAll? 'show less': 'show all'}></Button>

        </div>
    );
};

export default PhoneContainers;