import React  from 'react'; 
import {  Routes, Route, BrowserRouter  } from 'react-router-dom';
import './App.module.css';
import Main from './main';
import Audio1Jeong from './jeong/audio1Jeong';
import Audio2Jeong from './jeong/audio2Jeong';
import Audio3Jenog from './jeong/audio3Jeong';
import Audio4Jeong from './jeong/audio4Jeong';

import Audio1Myeong from './myeong/audio1Myeong';
import Audio2Myeong from './myeong/audio2Myeong';
import Audio3Myeong from './myeong/audio3Myeong';

import Audio1Chae from './chae/audio1Chae';
import Audio2Chae from './chae/audio2Chae';
import Audio3Chae from './chae/audio3Chae';

import Audio1Bok from './won/audio1Won';
import Audio2Bok from './won/audio2Won';
import Audio3Bok from './won/audio3Won';
import Audio4Bok from './won/audio4Won';
import Audio5Bok from './won/audio5Won';

import Audio1Kim from './kim/audio1Kim';
import Audio2Kim from './kim/audio2Kim';
import Audio3Kim from './kim/audio3Kim';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes> 
        <Route path="/" element={<Main />}/>
        <Route path="/audio1Jeong" element={<Audio1Jeong />}/>
        <Route path="/audio2Jeong" element={<Audio2Jeong />}/>
        <Route path="/audio3Jeong" element={<Audio3Jenog />}/>
        <Route path="/audio4Jeong" element={<Audio4Jeong />}/>

        <Route path="/audio1Myeong" element={<Audio1Myeong />}/>
        <Route path="/audio2Myeong" element={<Audio2Myeong />}/>
        <Route path="/audio3Myeong" element={<Audio3Myeong />}/>
        
        <Route path="/audio1Chae" element={<Audio1Chae />}/>
        <Route path="/audio2Chae" element={<Audio2Chae />}/>
        <Route path="/audio3Chae" element={<Audio3Chae />}/>

        <Route path="/audio1Bok" element={<Audio1Bok />}/>
        <Route path="/audio2Bok" element={<Audio2Bok />}/>
        <Route path="/audio3Bok" element={<Audio3Bok />}/>
        <Route path="/audio4Bok" element={<Audio4Bok />}/>
        <Route path="/audio5Bok" element={<Audio5Bok />}/>

        <Route path="/audio1Kim" element={<Audio1Kim />}/>
        <Route path="/audio2Kim" element={<Audio2Kim />}/>
        <Route path="/audio3Kim" element={<Audio3Kim />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
