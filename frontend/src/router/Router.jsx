import React from 'react';
import { BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

// Import Pages
import Home from '../page/Home/Home';
import SignIn from'../page/SignIn/SignIn';
import Dashboard from '../page/Dashboard/Dashboard';

// Import Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import 'font-awesome/css/font-awesome.min.css';

import "../main.css";

function HeaderFooter() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooter />}>
          <Route index element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;