import React, { useState } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [donateRequests, setDonateRequests] = useState([]);
  const [bloodRequests, setBloodRequests] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/admin/login', {
        email,
        password
      });
      if (res.data.success) {
        setIsLoggedIn(true);
        fetchRequests();
      }
    } catch (error) {
      alert('Invalid credentials');
    }
  };

  const fetchRequests = async () => {
    try {
      const donateRes = await axios.get('http://localhost:8000/api/donate/requests');
      const bloodRes = await axios.get('http://localhost:8000/api/request/requests');
      setDonateRequests(donateRes.data);
      setBloodRequests(bloodRes.data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

  const handleDonateAction = async (id, action) => {
    try {
      await axios.put(`http://localhost:8000/api/donate/${id}`, { status: action });
      fetchRequests();
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  const handleBloodRequestAction = async (id, action) => {
    try {
      await axios.put(`http://localhost:8000/api/request/${id}`, { status: action });
      fetchRequests();
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Donate Requests */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Donate Requests</h2>
            {donateRequests.length === 0 ? (
              <p className="text-gray-500">No pending requests</p>
            ) : (
              <div className="space-y-4">
                {donateRequests.map((request) => (
                  <div key={request._id} className="border rounded-lg p-4">
                    <p><strong>Name:</strong> {request.user?.name}</p>
                    <p><strong>Blood Group:</strong> {request.bloodGroup}</p>
                    <p><strong>Phone:</strong> {request.phoneNo}</p>
                    <p><strong>Address:</strong> {request.address}</p>
                    <p><strong>Donation Date:</strong> {new Date(request.donationDate).toLocaleDateString()}</p>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => handleDonateAction(request._id, 'accepted')}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleDonateAction(request._id, 'rejected')}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Blood Requests */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Blood Requests</h2>
            {bloodRequests.length === 0 ? (
              <p className="text-gray-500">No pending requests</p>
            ) : (
              <div className="space-y-4">
                {bloodRequests.map((request) => (
                  <div key={request._id} className="border rounded-lg p-4">
                    <p><strong>Blood Type:</strong> {request.bloodType}</p>
                    <p><strong>Quantity:</strong> {request.bloodPacketQuantity}</p>
                    <p><strong>Phone:</strong> {request.phoneNumber}</p>
                    <p><strong>Address:</strong> {request.fullAddress}</p>
                    <p><strong>Date:</strong> {new Date(request.dateOfBloodRequest).toLocaleDateString()}</p>
                    <div className="mt-4 flex gap-2">
                      <button
                        onClick={() => handleBloodRequestAction(request._id, 'accepted')}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleBloodRequestAction(request._id, 'rejected')}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
