import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import Course from './Components/Course/Course.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Cart from './Components/Cart/Cart.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';

const App = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        setCart([...cart, course]);
    };

    return (
        <Router>
            <Navbar cart={cart} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/courses" element={<Course addToCart={addToCart} />} />
                <Route path="/cart" element={<Cart cart={cart} />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;
