// import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';

import Staff from './pages/Staff.jsx';
import StaffProducts from './components/StaffProducts.jsx';
import Notifications from './components/Notification.jsx';
import Transactions from './components/Transactions.jsx';
import Suppliers from './components/Suppliers.jsx';


import Register from './components/Register';
import Products from './components/Products';

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


          {/* <Route path="*" element={<Error />} /> */}
          <Route path='/staff' element={<Staff />} />
          <Route path='/staff-products' element={<StaffProducts />} />
          <Route path='/suppliers' element={<Suppliers />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/notifications' element={<Notifications />} />

        </Routes>
      </Router>
    </div>
  )
}
export default App













