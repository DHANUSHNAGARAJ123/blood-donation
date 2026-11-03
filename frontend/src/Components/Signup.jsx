import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/userSlice';
import { useNavigate, Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';

const Signup = () => {
 const dispatch=useDispatch();
 const navigate = useNavigate();

 const [open, setOpen] = React.useState(false);
 

 const handleClose = (event, reason) => {
   if (reason === 'clickaway') {
     return;
   }

   setOpen(false);
 };


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.password) {
        setError('Please fill in all fields.');
        return;
      }
      setOpen(true);

      // Send form data to the backend
      const response = await axios.post('http://localhost:8000/api/user/register', formData);
      console.log('Registration response:', response.data);

      if(response.data.success === false){
        setOpen(false);
        alert(response.data.message || 'Registration failed');
        return;
      }

      if(response.data.success){
        setOpen(false);
        alert('Registration successful! Please login.');
        navigate('/login');
        setFormData({
          name: '',
          email: '',
          password: '',
        });
        setError('');
      }
    } catch (error) {
      console.error('Error:', error);
      alert(error.response?.data?.message || 'Registration failed')
      setOpen(false)
    }
  };

  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-red-800 to bg-purple-500 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Give Blood Save Life</h1>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit}>
          <h1 className="text-gray-800 font-bold text-2xl mb-5">Sign Up</h1>
          <div className="flex items-center border-2 py-2 px-3  mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="name"
              placeholder="Full name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              name="email"
              required
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3 ">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              name="password"
              placeholder="Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="block w-full bg-red-600 hover:bg-red-500 mt-7 py-2  text-white font-semibold mb-2">Sign Up</button>
          <p className="text-sm text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-red-600 font-semibold hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      
    </div>
  );
}

export default Signup;
