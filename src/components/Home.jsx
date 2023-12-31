
import React, { useState, useEffect } from 'react';
import CardList from './CardListe';
import produitData from './data.json';
import {Header} from "./Header.jsx";

function Home( ){
    const [darkMode, setDarkMode] = useState(false);

    // Charger et sauvegarder la préférence de mode
    useEffect(() => {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(isDarkMode);
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    // Fonction pour basculer le mode sombre
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  
  const [recherche, setRecherche] = useState('');
  const [produitFiltres, setproduitFiltres] = useState([]);  

  useEffect(() => {
    const resultatsFiltres = produitData.filter(produit => 
      produit.productName.toLowerCase().includes(recherche.toLowerCase())
    );
    setproduitFiltres(resultatsFiltres);
  }, [recherche]);
  
    return(
        <div className={darkMode ? 'dark' : ''}>
            <div className="bg-white dark:bg-gray-800">

       <Header toggleDarkMode={toggleDarkMode}  />
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
      </div>

 );
}
    export default Home;