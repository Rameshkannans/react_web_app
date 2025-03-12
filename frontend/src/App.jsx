import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProdectedRoute'
import Test from './components/Test';
import FrontPage from './layouts/FrontPage';
// import MainDash from './pages/MainDash';
import MyAccount from './pages/MyAccount';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function Logout() {
  localStorage.clear();
  return <Navigate to="/login" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<FrontPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/test" element={<Test />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute><Header /><Outlet /><Footer /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/my-account" element={<MyAccount />} />
        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
