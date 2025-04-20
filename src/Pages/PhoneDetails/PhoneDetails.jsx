import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { IoBookmarksSharp } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

import Button from '../../components/Ui/Button';
import { addFavorite } from '../../Utils';

const PhoneDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const singlePhone = data.find(phone => phone.id === parseInt(id));

    const { brand, camera_info, description, image, model, name, price, storage } = singlePhone || {};


    //localstorage

    const handleFavorite =()=>{
        addFavorite(singlePhone)
    }

    return (
<div className="py-12 px-4 max-w-4xl mx-auto">
{/* Image Section */}
<div className="relative">
    <img className="w-full rounded-lg shadow-lg mb-8" src={image} alt="banner-img" />
</div>

{/* Action Buttons */}
<div className="flex justify-end gap-4 mb-8">
    <Button label={<MdOutlineShoppingCartCheckout />}></Button>
    <Button onClick={handleFavorite} label={<IoBookmarksSharp />}></Button>
</div>

{/* Details Title */}
<h2 className="text-3xl font-bold mb-6 text-blue-600 text-center">{name}</h2>

{/* Table Format Details */}
<div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <tbody>
            <tr className="border-b">
                <td className="py-3 px-5 font-semibold">Brand</td>
                <td className="py-3 px-5">{brand}</td>
            </tr>
            <tr className="border-b">
                <td className="py-3 px-5 font-semibold">Model</td>
                <td className="py-3 px-5">{model}</td>
            </tr>
            <tr className="border-b">
                <td className="py-3 px-5 font-semibold">Storage</td>
                <td className="py-3 px-5">
                    {storage?.length > 0 ? (
                        <ul className="list-disc ml-5 space-y-1">
                            {storage.map((item, index) => <li key={index}>{item}</li>)}
                        </ul>
                    ) : "N/A"}
                </td>
            </tr>
            <tr className="border-b">
                <td className="py-3 px-5 font-semibold">Price</td>
                <td className="py-3 px-5">
                    {price ? (
                        <ul className="list-disc ml-5 space-y-1">
                            {Object.entries(price).map(([variant, p], i) => (
                                <li key={i}>{variant} - {p}</li>
                            ))}
                        </ul>
                    ) : "N/A"}
                </td>
            </tr>
            <tr className="border-b">
                <td className="py-3 px-5 font-semibold">Camera Info</td>
                <td className="py-3 px-5">{camera_info}</td>
            </tr>
            <tr>
                <td className="py-3 px-5 font-semibold">Description</td>
                <td className="py-3 px-5">{description}</td>
            </tr>
        </tbody>
    </table>
</div>
</div>
    );
};

export default PhoneDetails;
