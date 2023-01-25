
import React, { useEffect, useContext,useState } from "react";
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import linkUpContext from "./context/context";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";




function App() {
  return (
    <BrowserRouter>
     <NavBar/>
     <Routes>
     <Route path="/" element={<HomePage />} /> 
     </Routes>
   </BrowserRouter>
  );
}

export default App;
