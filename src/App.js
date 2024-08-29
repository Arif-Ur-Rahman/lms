import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Course from './Components/Course/Course.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Course />} />
            </Routes>
        </Router>
    );
};

export default App;
