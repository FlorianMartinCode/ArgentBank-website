import React from 'react';
import { BrowserRouter, Route, Routes, Outlet} from "react-router-dom";

// Import Pages
import Home from './page/Home/Home';
import SignIn from'./page/SignIn/SignIn';
import User from './page/User/User';


// Import Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import "./main.css";

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
          <Route path="/about" element={<SignIn />} />
          <Route path="/about" element={<User />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default router;