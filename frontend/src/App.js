// import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Register from './components/Register';
import Products from './components/Products';
import ManagingUsers from './components/ManagingUsers';
const App = () => {




  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products' element={<Products />} />


          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </Router>
    </div>
  )
}
export default App













