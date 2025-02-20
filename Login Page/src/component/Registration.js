import '../style/Registration/Registration.css'; 
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Registration = () => {
  const proImage = '/image/Proposed IIIT Bhagalpur Building1.jpg';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/auth/register', formData);
      console.log('Registration successful:', response.data);
      // Redirect to login page after successful registration
      navigate('/login');
    } catch (error) {
      const errorMsg = error.response ? error.response.data : 'Error registering!';
      console.error('Registration error:', errorMsg);
      alert(errorMsg);
    }
  };

  return (
    <div className='Registration'>
      <img src={proImage} alt="Proposed IIIT Bhagalpur Building" className="registration-image"/>
      <h2>Registration Page</h2>

      <form onSubmit={handleSubmit}>
        <div className='registration-form'>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div className='form-group'>
          <label>Confirm Password:</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <button type="submit" className='btn-2'>Register</button>
      </form>
    </div>
  );
};

export default Registration;
