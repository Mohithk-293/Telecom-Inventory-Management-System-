import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Staff from './pages/Staff';
import StaffProducts from './components/StaffProducts';
import Notifications from './components/Notification';
import Transactions from './components/Transactions';
import Suppliers from './components/Suppliers';
import Register from './components/Register';
import Products from './components/Products';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/staff-products" element={<StaffProducts />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
