import React, { useState, useEffect } from "react";
import { doSignOut } from "../firebase/auth";
import { auth } from "../firebase/firebase";

const Home = () => {
  const [userDisplayName, setUserDisplayName] = useState("");

  useEffect(() => {
    // Get the authenticated user's display name
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUserDisplayName(currentUser.displayName || "Anonymous");
    }
  }, []);

  const handleLogout = async () => {
    try {
      await doSignOut();
      // Redirect or perform any additional actions after logout
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to the Home Page, {userDisplayName}!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
