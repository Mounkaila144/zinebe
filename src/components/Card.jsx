import React from 'react';
const Card = ({ produit }) => {
    return (


        <div className="w-full max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
            <a href="#">
                <img className="p-8 rounded-t-lg" src={produit.productImage}  />
            </a>
            <div className="px-5 pb-5">
                <a href="#">
                    <h2 className="text-3xl font-semibold tracking-tight text-blue-500">{produit.productName}</h2>
                </a>
              
                 
                        <h4 className="text-md font-semibold tracking-tight text-yellow-500 dark:text-white">Description: {produit.shortDescription}</h4>

                        <h4 className="text-md font-semibold tracking-tight text-yellow-500 dark:text-white">Prix: {produit.price}</h4>
                        <h4 className="text-md font-semibold tracking-tight text-yellow-500 dark:text-white">Quantite: {produit.quantity}</h4>

                
               
            </div>
        </div>

    )
}
export default Card;