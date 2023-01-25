
import React, { useEffect, useContext,useState,BrowserRouter, Routes, Route  } from "react";
import linkUpContext from "./context/context";
import HomePage from "./pages/HomePage";
import NavBar from "./CSS/NavBar";
import HomePage from "./CSS/HomePage";
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
