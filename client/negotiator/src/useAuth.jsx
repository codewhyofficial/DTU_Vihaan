// useAuth.jsx
import { useState, useEffect } from 'react';
import { auth } from './firebase/firebase'; // Correct import path

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return { isAuthenticated };
};

export default useAuth;
