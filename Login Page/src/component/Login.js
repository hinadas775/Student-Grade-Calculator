import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../style/Login/Login.css'; 
import { Link } from "react-router-dom";

const Login = () => {
  const proImage = '/image/Proposed IIIT Bhagalpur Building1.jpg';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
       const response = await axios.post('http://local/host:5000/auth/login', {
        
      
        email,
        password,
      });
      console.log('Login successful:', response.data);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login error:', error?.response?.data || error.message);
      alert('Invalid credentials or server issue!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login">
      <img src={proImage} alt="IIIT Bhagalpur" />
      <div className="left">
        <div className="row-1">Congratulations</div>
        <div className="row-2">Welcome to IIIT Bhagalpur!</div>
        <div className="row-3">
          To finish your enrolment, please complete your registration with your personal, academic details and fee payment. <br />
          This will help us create your student profile, please enter accurate and complete information, as this will be used for official purposes.
        </div>
        <div className="row-4">Thank you for choosing our university and see you soon!</div>
      </div>

      <div className="right">
        <div className="login-page">
          <div className="row-5">Login</div>
          <div className="row-6">Welcome onboard with us!</div>

          <form onSubmit={handleLogin}>
            <div className="row-7">
              <label htmlFor="email">Student Email ID</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="row-8">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                required
              />
            </div>

            <div className="row-9">
              <Link to="/reset-password">Forgot Password?</Link>
            </div>

            <div className="row-10">
              <button type="submit" className="btn-1" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>

            <div className="row-11">
              Don't have an account? <Link to="/registration">Register here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
