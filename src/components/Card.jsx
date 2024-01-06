import React from 'react';
const Card = ({ produit }) => {
    return (


        <div className="w-full max-w-sm border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <div id={`carousel-${produit.sku}`} className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

                            <img src={`http://localhost:5000/${produit.image}`}   className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />

                </div>
            </div>
            <div className="px-5 pb-5">
                <a href="#">
                    <h2 className="text-xl font-semibold tracking-tight text-red-500">{produit.name}</h2>
                </a>
                <h4 className="text-xs  tracking-tight text-yellow-500 dark:text-white">Description: {produit.description}</h4>
                <h4 className="text-sm font-semibold tracking-tight text-yellow-500 dark:text-white">Prix: {produit.price}</h4>
            </div>
        </div>

    )
}
export default Card;