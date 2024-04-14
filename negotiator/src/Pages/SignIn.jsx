import React from 'react';
import AuthForm from './AuthForm';
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../firebase/auth.js';
import { useNavigate } from 'react-router-dom';
import google_image from '../assets/google-icon.png';
// import { Google } from 'react-icons/google';

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
//   const hello = <h2>Hello</h2>;

  return (
    // const hello = <h2>Hello</h2>;
    <>
    <div className=' text-black bg-white'>
    <div className='flex flex-col justify-center items-center h-screen'>
      <h2 className='text-3xl text-black m-2'>Sign In</h2>
      <AuthForm handleSubmit={handleSignIn} buttonText="Sign In" />
      <div className='flex flex-row pt-4 pb-2'>
      <p className='mx-1'>Not a User? </p>
      <button onClick={handleSignUpPageNavigation}>Go to Sign Up</button>
      </div>
      {/* <button onClick={handleSignUpPageNavigation}>Go to Sign Up</button> */}

      <div className='flex flex-row px-2 py-1 border border-slate-900 border-2 hover:scale-105 rounded-full duration-300'>
      <img src={google_image} className='h-8 w-8 m-1 mx-2' />
      <button onClick={handleGoogleSignIn} className='px-2 text-black '>Sign In with Google</button>
      </div>
    </div>
    </div>
    </>
  );
};

export default SignInPage;
