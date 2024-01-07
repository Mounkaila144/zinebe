import React, {useContext, useEffect, useState} from 'react';
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
import CategoryList from "./components/CategoryList.jsx";
import {AuthProvider} from "./components/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";


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
        <AuthProvider>

            <Router>
                <Header toggleDarkMode={toggleDarkMode}/>

                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/product/creat"
                           element={<ProtectedRoute roleRequired="admin"><ProductForm/></ProtectedRoute>}/>
                    <Route path="/product"
                           element={<ProtectedRoute roleRequired="admin"><ProductList/></ProtectedRoute>}/>
                    <Route path="/category"
                           element={<ProtectedRoute roleRequired="admin"><CategoryList/></ProtectedRoute>}/>
                    <Route path="/category/creat"
                           element={<ProtectedRoute roleRequired="admin"><CategoryForm/></ProtectedRoute>}/>
                    <Route path="/category/edit/:categoryId" element={<ProtectedRoute ><CategoryForm /></ProtectedRoute>} />

                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/> }/>
                    <Route path="/pricing" element={<Pricing/> }/>
                    <Route path="/service" element={<Service/> }/>
                    <Route path="/"
                           element={<Home />}/>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
