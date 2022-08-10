import React  from 'react'; 
import {  Routes, Route, BrowserRouter  } from 'react-router-dom';
import Audio1Jeong from './audio1/audio1-1.jsx';
import Audio1Myeong from './audio1/audio1-2.jsx';
import Audio1Chae from './audio1/audio1-3.jsx';
import Audio1Bok from './audio1/audio1-4.jsx';
import Audio1Kim from './audio1/audio1-5.jsx';
import Audio2Jeong from './audio2/audio2-1.jsx';
import Audio2Myeong from './audio2/audio2-2.jsx';
import Audio2Chae from './audio2/audio2-3.jsx';
import Audio2Bok from './audio2/audio2-4.jsx';
import Audio2Kim from './audio2/audio2-5.jsx';
import Audio3Jenog1 from './audio3/audio3-1-1.jsx';
import Audio3Jeong2 from './audio3/audio3-1-2.jsx';
import Audio3Myeong from './audio3/audio3-2.jsx';
import Audio3Chae from './audio3/audio3-3.jsx';
import Audio3Bok from './audio3/audio3-4.jsx';
import Audio3Kim from './audio3/audio3-5.jsx';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes> 
        <Route path="/" element={<Audio1Jeong />}/>
        <Route path="/audio1-1" element={<Audio1Jeong />}/>
        <Route path="/audio1-2" element={<Audio1Myeong />}/>
        <Route path="/audio1-3" element={<Audio1Chae />}/>
        <Route path="/audio1-4" element={<Audio1Bok />}/>
        <Route path="/audio1-5" element={<Audio1Kim />}/>
        <Route path="/audio2-1" element={<Audio2Jeong />}/>
        <Route path="/audio2-2" element={<Audio2Myeong />}/>
        <Route path="/audio2-3" element={<Audio2Chae />}/>
        <Route path="/audio2-4" element={<Audio2Bok />}/>
        <Route path="/audio2-5" element={<Audio2Kim />}/>
        <Route path="/audio3-1-1" element={<Audio3Jenog1 />}/>
        <Route path="/audio3-1-2" element={<Audio3Jeong2 />}/>
        <Route path="/audio3-2" element={<Audio3Myeong />}/>
        <Route path="/audio3-3" element={<Audio3Chae />}/>
        <Route path="/audio3-4" element={<Audio3Bok />}/>
        <Route path="/audio3-5" element={<Audio3Kim />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
