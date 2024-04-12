import React from 'react';
import AuthForm from './AuthForm';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.js';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const navigate = useNavigate();

  const handleSignUp = async (email, password) => {
    try {
      await doCreateUserWithEmailAndPassword(email, password);
      // Navigate to login page after successful sign up
      navigate('/signin');
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  const handleLoginPageNavigation = () => {
    // Navigate to login page
    navigate('/signin');
  };

  const handleGoogleSignIn = async () => {
    try {
      await doSignInWithGoogle();
      // Redirect to home page after successful Google sign-in
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <AuthForm handleSubmit={handleSignUp} buttonText="Sign Up" />
      <button onClick={handleLoginPageNavigation}>Go to Login</button>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default SignUpPage;
