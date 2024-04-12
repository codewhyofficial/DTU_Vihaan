import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx";
import Login from "./Pages/Login.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/home" element={<Home/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}
