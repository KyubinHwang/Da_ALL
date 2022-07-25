import React, { Component } from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Audio from './audio.js';

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/audio" element={<Audio />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
