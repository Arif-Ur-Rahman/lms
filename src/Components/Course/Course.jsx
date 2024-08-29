import React from 'react';
import './Course.css';
import courses from './course';

const Course = () => {
    return (
        <div className="courses-container">
            <h1>Our Courses</h1>
            <div className="courses-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <img src={course.image} alt={course.title} />
                        <h2>{course.title}</h2>
                        <p>{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Course;
