
import React, { useEffect, useContext,useState } from "react";
import linkUpContext from "./context/context";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
     <Routes>  
      <Route path="/home" element={<Home />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
