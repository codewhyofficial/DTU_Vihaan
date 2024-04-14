import React from 'react';
import AuthForm from './AuthForm';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.js';
import { useNavigate } from 'react-router-dom';

const AuthPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async (email, password) => {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      // Navigate to login page after successful sign up
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      await doSignInWithEmailAndPassword(email, password);
      // Navigate to home page after successful sign in
      navigate('/');
    } catch (error) {
      console.error('Error signing in:', error.message);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      // Navigate to home page after successful Google sign in
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm handleSubmit={handleSignUp} buttonText="Sign Up" />
      <h2>Sign In</h2>
      <AuthForm handleSubmit={handleSignIn} buttonText="Sign In" />
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default AuthPage;
