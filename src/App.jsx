import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScreenOne from './pages/ScreenOne/ScreenOne';
import ScreenTwo from './pages/ScreenTwo/ScreenTwo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ScreenOne />} />
        <Route path="/screen-two" element={<ScreenTwo />} />
      </Routes>
    </Router>
  );
}

export default App;
