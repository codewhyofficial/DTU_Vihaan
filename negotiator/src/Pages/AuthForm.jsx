// AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = ({ handleSubmit, buttonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    handleSubmit(email, password);
  };

  return (
    <form onSubmit={submitForm} className='flex flex-col'>
      <input
        className='p-2 rounded-lg m-1 w-64 bg-white border border-slate-700'
        type="email"
        placeholder="Email"
        value={email}
        onChange={handleEmailChange}
        required
      />
      <input
        className='p-2 rounded-lg m-1 w-64 bg-white border border-slate-700'
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        required
      />
      <div className='flex justify-center'>
      <button className='text-xl m-1 border border-slate-300 hover:bg-slate-800 hover:text-white duration-300 rounded-lg p-1 w-32' type="submit">{buttonText}</button>
      </div>
    </form>
  );
};

export default AuthForm;
