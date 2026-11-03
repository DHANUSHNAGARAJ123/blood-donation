// App.jsx
import React from 'react';
import Header  from './Components/Header';
import Footer from './Components/Footer';
import {Outlet} from "react-router-dom"
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
  return (
    <>
    
      <SnackbarProvider maxSnack={3}>
      <Header />
      <Outlet/>
      <Footer />
    </SnackbarProvider>
    </>
  );
}

export default App;
