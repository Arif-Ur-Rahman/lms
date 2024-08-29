import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ cart }) => {
    return (
        <div className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/cart">Cart ({cart.length})</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Navbar;
