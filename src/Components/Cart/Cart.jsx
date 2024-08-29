import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {
    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            {cart.length > 0 ? (
                <div className="cart-items">
                    {cart.map((course, index) => (
                        <div key={index} className="cart-item">
                            <img src={course.image} alt={course.title} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h2>{course.title}</h2>
                                <p>{course.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="empty-cart-message">Your cart is empty.</p>
            )}
        </div>
    );
};

export default Cart;
