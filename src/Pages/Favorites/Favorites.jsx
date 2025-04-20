import React, { useEffect, useState } from 'react';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import { getFavorites, removeFavorite } from '../../Utils';
import EmptyState from '../../components/Ui/EmptyState';
const Favorites = () => {

    
        const [displayPhones, setDisplayPhones] = useState([]);

        useEffect(()=>{
           
          const savePhones = getFavorites()
          setDisplayPhones(savePhones)
        },[])

//delete function

const handleDelete =(id)=>{
removeFavorite(id)
setDisplayPhones(getFavorites())
}

if(displayPhones.length <1) return <EmptyState></EmptyState>

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
            deletable={true}
            handleDelete={handleDelete}
            ></PhoneCard>)
        }
            
            </div>
      



        </div>
        </div>
    );
};

export default Favorites;