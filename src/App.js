import React  from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Audio1_1 from './audio1/audio1-1.js';
import Audio1_2 from './audio1/audio1-2.js';
import Audio1_3 from './audio1/audio1-3.js';
import Audio1_4 from './audio1/audio1-4.js';
import Audio1_5 from './audio1/audio1-5.js';
import Audio2_1 from './audio2/audio2-1.js';
import Audio2_2 from './audio2/audio2-2.js';
import Audio2_3 from './audio2/audio2-3.js';
import Audio2_4 from './audio2/audio2-4.js';
import Audio2_5 from './audio2/audio2-5.js';
import Audio3_1_1 from './audio3/audio3-1-1.js';
import Audio3_1_2 from './audio3/audio3-1-2.js';
import Audio3_2 from './audio3/audio3-2.js';
import Audio3_3 from './audio3/audio3-3.js';
import Audio3_4 from './audio3/audio3-4.js';
import Audio3_5 from './audio3/audio3-5.js';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes> 
        <Route path="/" element={<Audio1_1 />}/>
        <Route path="/audio1-1" element={<Audio1_1 />}/>
        <Route path="/audio1-2" element={<Audio1_2 />}/>
        <Route path="/audio1-3" element={<Audio1_3 />}/>
        <Route path="/audio1-4" element={<Audio1_4 />}/>
        <Route path="/audio1-5" element={<Audio1_5 />}/>
        <Route path="/audio2-1" element={<Audio2_1 />}/>
        <Route path="/audio2-2" element={<Audio2_2 />}/>
        <Route path="/audio2-3" element={<Audio2_3 />}/>
        <Route path="/audio2-4" element={<Audio2_4 />}/>
        <Route path="/audio2-5" element={<Audio2_5 />}/>
        <Route path="/audio3-1-1" element={<Audio3_1_1 />}/>
        <Route path="/audio3-1-2" element={<Audio3_1_2 />}/>
        <Route path="/audio3-2" element={<Audio3_2 />}/>
        <Route path="/audio3-3" element={<Audio3_3 />}/>
        <Route path="/audio3-4" element={<Audio3_4 />}/>
        <Route path="/audio3-5" element={<Audio3_5 />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
