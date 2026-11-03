import React, { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { SnackbarProvider, useSnackbar } from 'notistack';
import { Path } from 'leaflet';


const Donate = () => {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);


  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };



  const user = useSelector(store => store.user);

  console.log(user);

  const [formData, setFormData] = useState({
    gender: '',
    dob: '',
    bloodGroup: '',
    lastDonation: '',
    address: '',
    phoneNo: '',
    medicalIllness: '',
    donationDate: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [hospitalsData, setHospitalsData] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(formData);
    const response = await axios.post('http://localhost:8000/api/donate/donar', { ...formData, user });
    console.log(response.data); // Assuming the backend responds with a message
    if (response.data.success) {

      setOpen(true);


      setFormData({
        gender: '',
        dob: '',
        bloodGroup: '',
        lastDonation: '',
        address: '',
        phoneNo: '',
        medicalIllness: '',
        donationDate: '',
      });

      // Fetch hospitals data based on the selected city
      const cityHospitals = hospitals[formData.city] || [];
      setHospitalsData(cityHospitals);
    }
  };


  return (
    <>
      {user.user !== null ? <div className="max-w-md mx-auto bg-white  p-6 mt-10 mb-2 shadow-lg shadow-cyan-500/100 ">
        <h2 className="text-2xl font-bold mb-6 text-center">Donor Registration</h2>
        <p className="text-green-600 mb-4">All fields must be filled.</p>
        <form onSubmit={handleSubmit} method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Blood Group:</label>
            <select
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option selected hidden disabled value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Last Time Blood Donated:</label>
            <select
              name="lastDonation"
              value={formData.lastDonation}
              onChange={handleChange}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option selected disabled hidden value=''>Select Your Option</option>
              <option value="not_donated_ever">Not donated ever</option>
              <option value="less_than_3_months">Less than 3 months ago</option>
              <option value="3_to_6_months">3 to 6 months ago</option>
              <option value="more_than_6_months">More than 6 months ago</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Address:</label>
            <input
              placeholder='Enter Your Full Address'
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
            <input
              type="text"
              name="phoneNo"
              placeholder='Enter Your Phone/Contact Number'
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              required
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            >
              <option selected disabled hidden value=''>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Date of Blood Donation:</label>
            <input
              type="date"
              name="donationDate"
              value={formData.donationDate}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Medical Illness (If any):</label>
            <textarea
              name="medicalIllness"
              value={formData.medicalIllness}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: '100%' }}
          >
            Data Submitted Successfully
          </Alert>
        </Snackbar>

      </div> : <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-lg font-semibold mb-4">Please Register Yourself</p>
        <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
           Sign Up
        </Link>
      </div>
      }
    </>
  );
}


export default Donate;
