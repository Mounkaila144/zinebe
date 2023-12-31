import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, useNavigate} from 'react-router-dom';
import Login from "./components/login.jsx";
import AdminPage from "./components/AdminPage.jsx";
import Home from "./components/Home.jsx";


function App() {

  return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login  />} />
          <Route path="/" element={<Home /> } />
          <Route path="/admin" element={<AdminPage />} />
          {/* Redirige toutes les autres routes non définies */}
          <Route path="*" element={ <Navigate to="/login" />} />
        </Routes>
      </Router>
  );
}

export default App;
