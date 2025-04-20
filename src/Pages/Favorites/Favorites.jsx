import React, { useEffect, useState } from 'react';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import { getFavorites } from '../../Utils';
const Favorites = () => {

    
        const [displayPhones, setDisplayPhones] = useState([]);

        useEffect(()=>{
           
          const savePhones = getFavorites()
          setDisplayPhones(savePhones)
        },[])
    return (
        <div>
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
      



        </div>
        </div>
    );
};

export default Favorites;