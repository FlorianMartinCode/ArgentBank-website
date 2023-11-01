import React, { useState, useEffect} from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import argentBankLogo from '../../assets/argentBankLogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { userService } from '../../service/userService';
import { setUser } from "../../redux/reducer/userReducer";

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.profile.userName);
  const location = useLocation();

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      userService()(token)
        .then(data => {
          setIsLoggedIn(true);
          dispatch(setUser(data.body));
        })
        .catch(error => {
          console.error('Error fetching user profile:', error);
        });
    } 
  }, [dispatch, location]);

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
          <>
        <NavLink 
          to="/Dashboard"
          className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          {userName}
        </NavLink>
        <NavLink
        to="/sign-in" 
        onClick={handleSignOut}>
          <i className="fa fa-sign-out"></i>
        Sign Out
        </NavLink>
        </>
        ) : (
          <NavLink 
            className="main-nav-item" 
            to="/sign-in"
            >
            <i className="fa fa-user-circle"></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Header;