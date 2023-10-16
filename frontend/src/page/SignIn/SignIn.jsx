import React, { useRef, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from '../../redux/fetch/loginUser';

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

  const handleSignIn = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const remember = rememberRef.current.checked;

    try {
      const response = await dispatch(loginUser({ email, password }));

      if (response && response.ok) {
        navigate("/user");
      } else {
        throw new Error("User not found");
      }
    } catch (error) { 
    }

    if (remember) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
  }

  useEffect(() => {
    rememberRef.current.checked = true;
  }, []);

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              ref={emailRef}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              ref={passwordRef}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              ref={rememberRef}
              defaultChecked={true}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button
            type="button"
            className="sign-in-button"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;