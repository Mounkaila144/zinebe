
import React, { useState, useEffect } from 'react';
import CardList from './CardListe';
import produitData from './data.json'; 

function Home({produits} ){

  
  const [recherche, setRecherche] = useState('');
  const [produitFiltres, setproduitFiltres] = useState([]);  

  useEffect(() => {
    const resultatsFiltres = produitData.filter(produit => 
      produit.categoryName.toLowerCase().includes(recherche.toLowerCase())
    );
    setproduitFiltres(resultatsFiltres);
  }, [recherche]);
  
    return(
        <div>
       
        <div className="container mx-auto p-4">
          <div className="flex gap-4 mb-4">
            <input 
              className="flex-1 p-2 border rounded text-black"
              type='text' 
              placeholder='Rechercher un produits' 
              value={recherche} 
              onChange={(e) => setRecherche(e.target.value)} 
            />
           
          </div>
          <CardList produits={produitFiltres} />
        </div>
      </div>

 );
}
    export default Home;