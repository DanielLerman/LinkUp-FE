
import React, { useEffect, useContext,useState } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import linkUpContext from "./context/context";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import WelcomePage from "./pages/WelcomePage";
import Settings from "./pages/Settings"
import index from './index.css'
// import ModalLoginSign from "./pages/ModalLoginSign";




function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
      <Route path="/" element={<WelcomePage/>}/>
     <Route path="/home" element={<HomePage />} /> 
     <Route path="/settings" element={<Settings />} /> 
     </Routes>
   </BrowserRouter>
  );
}

export default App;
