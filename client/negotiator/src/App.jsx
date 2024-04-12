import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx";
import Login from "./Pages/Login.jsx";
import AuthPage from "./Pages/AuthPage.jsx";
import useAuth from "./useAuth"; // Import your custom hook for authentication
import SignInPage from "./Pages/SignIn.jsx";
import SignUpPage from "./Pages/SignUp.jsx";

export default function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {/* Route for the root URL */}
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="/signin" element={<SignInPage/>}/>
        <Route path="/" element={isAuthenticated ? <Home /> : <SignInPage />} />
        {/* Routes for other pages */}
        <Route path="/product" element={isAuthenticated?<Product /> : <SignInPage/>} />
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
