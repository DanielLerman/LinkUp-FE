
import React, { useEffect, useContext,useState } from "react";
import linkUpContext from "./context/context";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>


     <Routes>
      <Route path="/" element={<HomePage/>}/>
      
       
     </Routes>
   </BrowserRouter>
  );
}

export default App;
