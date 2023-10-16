import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import argentBankLogo from '../../assets/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  const location = useLocation();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch({ type: "LOGOUT" });
  };

  const isUserPage = location.pathname === '/user';

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
      </NavLink>
      <div>
        {isLoggedIn ? (
          <NavLink className="main-nav-item" onClick={handleSignOut}>
            <i className="fa fa-user-circle"></i> Sign Out
          </NavLink>
        ) : (
          <NavLink className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i> {isUserPage ? 'Sign Out' : 'Sign In'}
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;
