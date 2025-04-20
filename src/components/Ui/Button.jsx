import React from 'react';
import { MdShoppingCartCheckout } from 'react-icons/md';

const Button = ({label, type, onClick}) => {
    return (
        <div>
        <button 
        type={type}

        onClick={onClick}
        
        className="p-3 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition">
            {label}
        </button>

           
        </div>
    );
};

export default Button;
