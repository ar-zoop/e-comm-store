import React from 'react';
import './App.css';

import{Index} from './components/Index';
import {Login} from './components/Login';
import { Signup } from './components/Signup';
import {Navbar} from './components/Navbar';
import { CategoryNavbar} from './components/CategoryNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
      
      <Router>    
        <Navbar />
        <CategoryNavbar />    
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />          
          <Route path='/' element={<Index />} />
          <Route path='/cart' />
          <Route path='/category'/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;