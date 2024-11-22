import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Reach out to me!</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn primary-btn">Send Message</button>
        </form>
        <div className="contact-links">
          <p>Email: <a href="mailto:kumardinesh.kota@gmail.com">kumardinesh.kota@gmail.com</a></p>
          <p>Phone: <a href="tel:+919494403490">+919494403490</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;


