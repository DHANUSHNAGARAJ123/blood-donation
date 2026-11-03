import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { getUser } from './redux/userSlice.js';
import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Login = () => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [useremail, setuseremail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (useremail !== '' && password !== '') {
      try {
        setLoading(true);
        const res = await axios.post('http://localhost:8000/api/user/login', {
          email: useremail,
          password: password
        });
        console.log(res.data)
        dispatch(getUser(res?.data?.user));

        if (res.data) {
          navigate('/');
        }
      } catch (error) {
        console.error('Error logging in:', error);
        setOpen(true)
      } finally {
        setLoading(false);
      }
    } else {
      alert('Fill in the required fields');
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
        <form className="bg-white" onSubmit={handleLogin}>
          <h1 className="text-gray-800 font-bold text-2xl mb-5">Login</h1>
          <div className="flex items-center border-2 py-2 px-3 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="email"
              value={useremail}
              required
              onChange={(e) => { setuseremail(e.target.value) }}
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 py-2 px-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd" />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="password"
              value={password}
              required
              onChange={(e) => { setpassword(e.target.value) }}
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="block w-full bg-red-600 hover:bg-red-500 mt-7 py-2 text-white font-semibold mb-2"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          <p className="text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link to="/signup" className="text-red-600 font-semibold hover:underline">
              Register
            </Link>
          </p>
        </form>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Incorrect email or password
        </Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
