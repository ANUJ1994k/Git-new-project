
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Q7/home';
import Login from './components/Q7/login';
import Users from './components/Q7/users';
import Navbar from './components/Q7/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
export default App
