import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import store from './Components/redux/store.js'; // Assuming you have a Redux store set up
import App from './App.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage.jsx';
import Donate from './Components/Donate.jsx';
import AdminPage from './Components/AdminPage.jsx';
import Whygiveblood from './Components/Whygiveblood.jsx';
import Thedonationprocess from './Components/Thedonationprocess.jsx';
import Login from './Components/Login.jsx';
import BloodRequest from './Components/BloodRequest.jsx';
import Signup from './Components/Signup.jsx';
import Contact from './Components/Contact.jsx';
import { persistStore } from 'redux-persist';
let persistor = persistStore(store);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path='' element={<HomePage />} />
            <Route path="whygiveblood" element={<Whygiveblood />} />
            <Route path="thedonationprocess" element={<Thedonationprocess />} />
            <Route path="donate" element={<Donate />} />
            <Route path="bloodrequest" element={<BloodRequest />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </PersistGate>
  </Provider>
);
