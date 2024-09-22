import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar';
import Home from './home';
import About from './about';
import Products from './product';
import Contact from './contact';

function Index() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect to Home for any unknown path */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default Index;
