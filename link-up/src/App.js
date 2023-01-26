
import React, { useEffect, useContext,useState } from "react";
import linkUpContext from "./context/context";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Home from "./pages/HomePage";
import Settings from "./pages/Settings";

function App() {
  return (
    <BrowserRouter>
     <Routes>  
      <Route path="/home" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
     </Routes>
   </BrowserRouter>
  );
}

export default App;
