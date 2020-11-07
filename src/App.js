import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar'
import { BrowserRouter } from 'react-router-dom'
import SignIn from './pages/signIn'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <SignIn />
    </>
  );
}

export default App;
