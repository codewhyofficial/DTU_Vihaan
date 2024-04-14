import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import ProductDetails from "../Components/ProductDetails";
import { useLocation } from "react-router-dom";

const CheckOut = () => {
  const location = useLocation();
  const negotiatedPrice = location.state ? location.state.negotiatedPrice : null;

  return(
    <>
    <Navbar/> 
    <Hero/>
    {/* <ProductDetails/> */}
    <div className="my-28 text-4xl text-center text-black">
        Your negotiated price is : {negotiatedPrice}
    </div>
    <Footer/>
    </>
  )
};

export default CheckOut;
