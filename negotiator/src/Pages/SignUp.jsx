import React from 'react';
import AuthForm from './AuthForm';
import { doCreateUserWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.js';
import { useNavigate } from 'react-router-dom';
import google_image from '../assets/google-icon.png';

// import { ReactComponent as InstagramIcon } from './icons/instagram-icon.svg';

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
    <div className='flex flex-col justify-center items-center h-screen bg-white'>
      <h2 className='text-3xl text-black m-2'>Sign Up</h2>
      <AuthForm handleSubmit={handleSignUp} buttonText="Sign Up" />
      <div className='flex flex-row pt-4 pb-2'>
        <p className='mx-1'>Already a User?</p>
        <button onClick={handleLoginPageNavigation}>Go to Login</button>
      </div>
      <div className="flex flex-row items-center">
        {/* <InstagramIcon className="text-blue-500 mr-2" width="32" height="32" /> */}
        <div className='flex flex-row px-2 py-1 border border-slate-900 border-2 hover:scale-105 rounded-full duration-300'>
      <img src={google_image} className='h-8 w-8 m-1 mx-2' />
      <button onClick={handleGoogleSignIn} className='px-2 text-black '>Sign In with Google</button>
      </div>
      </div>
    </div>
  );
};

export default SignUpPage;
