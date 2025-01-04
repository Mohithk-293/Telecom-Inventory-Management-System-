import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./login";
import RegistrationPage from "./registration";

import React, { useState } from 'react';
import './App.css';  

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginUsername, setLoginUsername] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    alert(`Login attempted with Username: ${loginUsername}, Email: ${loginEmail}`);
    // Add your backend API call for login here.
  };

  const handleRegistrationSubmit = (event) => {
    event.preventDefault();
    alert(`Registration attempted for Name: ${registerName}, Username: ${registerUsername}, Email: ${registerEmail}`);
    // Add your backend API call for registration here.
  };

  return (
    <div className="container">
      {isLogin ? (
        <div id="login-container">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <input
              type="text"
              value={loginUsername}
              onChange={(e) => setLoginUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
          <div className="link">
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={() => setIsLogin(false)}>
                Register
              </a>
            </p>
          </div>
        </div>
      ) : (
        <div id="registration-container">
          <h2>Register</h2>
          <form onSubmit={handleRegistrationSubmit}>
            <input
              type="text"
              value={registerUsername}
              onChange={(e) => setRegisterUsername(e.target.value)}
              placeholder="Username"
              required
            />
            <input
              type="text"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit">Register</button>
          </form>
          <div className="link">
            <p>
              Already have an account?{' '}
              <a href="#" onClick={() => setIsLogin(true)}>
                Login
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
// import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Products from './components/Products';
const App = () => {


  return (
    <div className="App">
      <AuthForm />
    </div>
  );    
}
export default App













