import React from 'react';
import './Home.css';

import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const handleCourseRedirect = () => {
        navigate('/about');
    };
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Welcome to Our Platform</h1>
                <p>Your journey to learn and grow starts here.</p>
                <button onClick={handleCourseRedirect}className="hero-button">Get Started</button>
            </div>
        </div>
    );
};

export default Home;
