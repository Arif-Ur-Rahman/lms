import React from 'react';
import './Course.css';
import courses from './course';

const Course = ({ addToCart }) => {
    return (
        <div className="courses-container">
            <h1>Our Courses</h1>
            <div className="courses-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={course.image} alt={course.title} className="course-image" />
                        <div className="course-details">
                            <h2>{course.title}</h2>
                            <p>{course.description}</p>
                            <button onClick={() => addToCart(course)} className="purchase-button">Purchase</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
