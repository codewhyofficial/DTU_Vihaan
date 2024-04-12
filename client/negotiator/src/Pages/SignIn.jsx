import React from 'react';
import AuthForm from './AuthForm';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.js';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  const navigate = useNavigate();

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
      // Redirect to home page after successful Google sign-in
      navigate('/');
    } catch (error) {
      console.error('Error signing in with Google:', error.message);
    }
  };
  const handleSignUpPageNavigation = () => {
    // Navigate to sign-up page
    navigate('/signup');
  };

  return (
    <div>
      <h2>Sign In</h2>
      <AuthForm handleSubmit={handleSignIn} buttonText="Sign In" />
      <button onClick={handleSignUpPageNavigation}>Go to Sign Up</button>
      <button onClick={handleGoogleSignIn}>Sign In with Google</button>
    </div>
  );
};

export default SignInPage;
