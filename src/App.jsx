import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Login from "./components/login.jsx";
import AdminPage from "./components/AdminPage.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import {Header} from "./components/Header.jsx";
import Pricing from "./components/pricing.jsx";
import Service from "./components/Service.jsx";
import Contact from "./components/Contact.jsx";
import Register from "./components/register.jsx";
import ProductForm from "./components/ProductForm.jsx";
import CategoryForm from "./components/categoryForm.jsx";
import ProductList from "./components/ProductList.jsx";


function App() {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);
    useEffect(() => {
        const storedDarkMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(storedDarkMode);
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
  return (

    <Router>
        <Header toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/login" element={<Login  />} />
          <Route path="/register" element={<Register /> } />
          <Route path="/product/creat" element={<ProductForm /> } />
          <Route path="/product" element={<ProductList /> } />
          <Route path="/category/creat" element={<CategoryForm /> } />
          <Route path="/about" element={<About /> } />
          <Route path="/contact" element={<Contact /> } />
          <Route path="/pricing" element={<Pricing /> } />
          <Route path="/service" element={<Service /> } />
          <Route path="/admin" element={<AdminPage />} />
            <Route path="/" element={<Home darkMode={darkMode} /> } />
          <Route path="*" element={ <Navigate to="/login" />} />
        </Routes>
      </Router>
  );
}

export default App;
