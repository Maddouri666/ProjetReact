import React from 'react';
import './css/app.css';
import Home  from './pages/Home';
import Menu from './components/Menu';
import TechnoAdd from './pages/TechnoAdd';
import TechnoAll from './pages/TechnoAll';
import Formulaire from './pages/Formulaire';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App(){
  return (
  <BrowserRouter>
  <Menu/>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/add" element={<TechnoAdd/>}/>
    <Route path="/all" element={<TechnoAll/>}/>
    <Route path="/form" element={<Formulaire/>}/>
  </Routes> 
  </BrowserRouter>

  );  
}

