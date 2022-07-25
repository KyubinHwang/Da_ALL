import React, { Component } from 'react'; 
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Audio from './audio.js';

function App() {
  return (
    <HashRouter>
      <Routes> 
        <Route path="/" element={<Audio />}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
