import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
    const navigate = useNavigate();

    const handleCourseRedirect = () => {
        navigate('/courses');
    };

    return (
        <div className="about-hero">
            <h1>Welcome to Arif's Learning Point</h1>
            <p>Your one-stop solution for mastering new skills in technology, design, and more. Empower your future with our expert-led courses designed to boost your career.</p>
            <button onClick={handleCourseRedirect}>View Courses</button>
        </div>
    );
};

export default About;
