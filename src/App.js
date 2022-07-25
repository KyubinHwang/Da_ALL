import React, { Component } from 'react'; 
import { HashRouter, BrowserRouter, Routes, Route } from 'react-router-dom';
import Audio from './audio.js';

function App() {
  return (
    // <HashRouter basename={process.env.PUBLIC_URL}>
    //   <Routes> 
    //     <Route path="/" element={<Audio />}/>
    //   </Routes>
    // </HashRouter>
    <Audio/>
  );
}

export default App;
