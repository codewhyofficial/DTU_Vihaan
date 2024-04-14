import React from "react";
import { doSignOut } from "../firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from 'react-router-dom';
import Neutrino from "../assets/Neutrino.png";
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await doSignOut();
      // Redirect or perform any additional actions after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  const handleHomeNavigation = () => {
    // Navigate to home route
    navigate('/');
  };
  const handleProductNavigation = () => {
    // Navigate to home route
    navigate('/product');
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* Dropdown menu */}

        {/* Logo */}
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <div className=" w-36 h-11 mt-0 p-2 mb-2 mx-4">
        <img
          src={Neutrino}
          alt="Company Logo"
          className=" mt-0 w-80"
        />
      </div>
      </div>
      {/* Center menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">
          <li>
            <a onClick={handleHomeNavigation} className="hover:scale-110">Home</a>
          </li>
          <li>
            <a onClick={handleProductNavigation} className="hover:scale-110">Product</a>
          </li>
          <li>
            <a onClick={handleHomeNavigation} className="hover:scale-110">Contact</a>
          </li>
          <li>
            <a onClick={handleHomeNavigation} className="hover:scale-110">About</a>
          </li>
        </ul>
      </div>
      {/* Logout button */}
      <div onClick={handleLogout} className="navbar-end px-4">
        <a className="btn">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
