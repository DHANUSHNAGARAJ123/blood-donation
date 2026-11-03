import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const BloodRequest = () => {

  const user = useSelector(store => store.user);

  console.log(user)

  const [formData, setFormData] = useState({
    dateOfBirth: '',
    gender: '',
    phoneNumber: '',
    fullAddress: '',
    bloodType: '',
    bloodPacketQuantity: '',
    criticalNeed: '',
    dateOfBloodRequest: '',
    requestDurationTime: '',
    hospitalized: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const response = await axios.post('http://localhost:8000/api/request/recipient', { ...formData, user });

    console.log(response.data); // Assuming the backend responds with a message

    if (response.data.success) {
      setFormData({
        dateOfBirth: '',
        gender: '',
        phoneNumber: '',
        fullAddress: '',
        bloodType: '',
        bloodPacketQuantity: '',
        criticalNeed: '',
        dateOfBloodRequest: '',
        requestDurationTime: '',
        hospitalized: ''
      });
    }

  };

  return (
    <>
      {user.user !== null ?
        <div className="max-w-md mx-auto bg-white p-6 mt-10 mb-2 shadow-lg shadow-cyan-500/100">
          <h2 className="text-2xl font-bold mb-6 text-center">Blood Recipient</h2>
          <p className="text-green-600 mb-4">All fields must be filled.</p>
          <form className="space-y-4" onSubmit={handleSubmit} method="POST">
            <div>
              <label htmlFor="date-of-birth" className="block text-gray-700 text-sm font-bold mb-2">Date of Birth:</label>
              <input
                type="date"
                id="date-of-birth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">Gender:</label>
              <select
                id="gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option disabled hidden value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">Phone Number:</label>
              <input
                type="tel"
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder='Enter Your Phone/Contact Nu'
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="block text-gray-700 text-sm font-bold mb-2">Full Address:</label>
              <input
                type="text"
                id="email-address"
                name="fullAddress"
                value={formData.fullAddress}
                onChange={handleChange}
                placeholder="Enter Your Full Address"
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="blood-type" className="block text-gray-700 text-sm font-bold mb-2">Blood Type:</label>
              <select
                id="blood-type"
                name="bloodType"
                value={formData.bloodType}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option disabled hidden value="">Select Blood Type</option>
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
            <div>
              <label htmlFor="blood-packet" className="block text-gray-700 text-sm font-bold mb-2">Blood Packet Quantity:</label>
              <input
                type="number"
                id="blood-packet"
                name="bloodPacketQuantity"
                value={formData.bloodPacketQuantity}
                onChange={handleChange}
                placeholder='Enter Blood Packet Quantity'
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="critical-need" className="block text-gray-700 text-sm font-bold mb-2">Select Your Blood Need:</label>
              <select
                id="critical-need"
                name="criticalNeed"
                value={formData.criticalNeed}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option disabled hidden value="">Select Blood Need</option>
                <option value="critical">Critical</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">Date of Blood Request:</label>
              <input
                type="date"
                name="dateOfBloodRequest"
                value={formData.dateOfBloodRequest}
                onChange={handleChange}
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div>
              <label htmlFor="request-duration-time" className="block   mb-2block text-gray-700 text-sm font-bold mb-2">Request Duration (Time):</label>
              <input
                type="time"
                id="request-duration-time"
                name="requestDurationTime"
                value={formData.requestDurationTime}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              />
            </div>
            <div>
              <label htmlFor="hospitalized" className="block text-gray-700 text-sm font-bold mb-2">Hospitalized:</label>
              <select
                id="hospitalized"
                name="hospitalized"
                value={formData.hospitalized}
                onChange={handleChange}
                required
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
              >
                <option disabled hidden value="">Select Hospitalization Status</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
            <div>
              <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>

          </form>

        </div> : <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <p className="text-lg font-semibold mb-4">Please Register Yourself</p>
          <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold  py-3 px-6 rounded-lg transition duration-300">
            Sign Up
          </Link>
        </div>
      }
    </>
  );
}

export default BloodRequest;