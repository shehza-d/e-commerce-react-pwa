import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import routing components
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contect from "./pages/Contect";
import Login from "./pages/Login";  
import SignupPage from "./pages/Resgister";

import "./index.css";
import LoginMinimal from "./pages/Login";
import Slider from "./components/Slider";
import Product from "./pages/Product";

function App() {
  const isLoggedIn = true ;

  return (
    <>
      <Banner />
      <Navbar />
      


      <Routes>
    
         < Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<div>not foundddd</div>} />
        <Route path="/product" element={<Product />} />
        {isLoggedIn ? (
          <>
            <Route
              path="/profile"
              element={<div>this is my profile page</div>}
            />
           
            <Route path="/contect" element={<Contect />} /> 
            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}

        <Route path="/login" element={<LoginMinimal />} />
        <Route path="/resgister" element={<SignupPage/>} />
      </Routes>
    </>
  );
}

export default App;
