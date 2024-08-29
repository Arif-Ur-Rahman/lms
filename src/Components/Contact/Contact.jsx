import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="info-section">
                <h1>Arif Learning Points</h1>
                <p>Welcome to Arif Learning Points, where we offer a wide range of courses designed to enhance your skills and knowledge. Our mission is to provide quality education that empowers you to achieve your goals.</p>
                <p>If you have any questions or need further information, feel free to reach out to us using the contact form below.</p>
            </div>
            <div className="form-section">
                <h2>Contact Us</h2>
                <form className="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" placeholder="Your Message" required></textarea>

                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
