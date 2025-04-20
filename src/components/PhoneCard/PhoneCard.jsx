import React from 'react';
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router';


const PhoneCard = ({ phone, deletable, handleDelete }) => {
  const { name, description, image, id } = phone || {};

  return (
    <div className="relative">
      <div className="card bg-base-100 shadow-sm group">
        <figure>
          <img src={image} alt="Phone" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <Link to={`/phone-details/${id}`}>
              <button className="btn btn-primary">View More</button>
            </Link>
          </div>
        </div>

        {deletable && (
          <div onClick={()=>handleDelete(id)} className="absolute -top-2 -right-2 cursor-pointer border-2 shadow:md bg-black rounded-2xl p-1">
            <MdDeleteForever
              size={20}
              className="text-gray-300 transition-colors duration-300 group-hover:text-red-600"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PhoneCard;
