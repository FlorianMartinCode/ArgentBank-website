import React, { useState, useEffect } from 'react';

function SignIn() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [remember, setRemember] = useState(true);

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
      setFormData({
        email: savedEmail,
        password: savedPassword,
      });
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRememberChange = (e) => {
    setRemember(e.target.checked);
  };

  const handleSignIn = async () => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      const token = data.body.token;
      localStorage.setItem('token', token);

      if (remember) {
        localStorage.setItem('email', formData.email);
        localStorage.setItem('password', formData.password);
      } else {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
      }

      window.location.href = '/user';
    } else {
      alert('Identifiants incorrects.');
    }
  };

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
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={remember}
              onChange={handleRememberChange}
            />
            <label
             htmlFor="remember-me"
             onClick={(e) => e.preventDefault()}
             >
              Remember me
            </label>
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