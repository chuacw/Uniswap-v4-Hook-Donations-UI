import React, { useState } from 'react';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';

import 'react-tooltip/dist/react-tooltip.css';

import { Routes, Route } from "react-router-dom";
import DonationSettings from './DonationSettings';

function App() {
  return (
    
    <div className="App">
      <Routes>
        <Route path="DonationSettings" element={ <DonationSettings/> } />
        <Route path="/" element={ <DonationSettings/>} />
      </Routes>
    </div>
  )
}

export default App 
