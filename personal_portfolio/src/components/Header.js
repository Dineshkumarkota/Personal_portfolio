import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Left Section */}
        <div className="header-left">
          <h1>
            Hello, I'm <span className="highlight">Dinesh Kumar Kota</span>
          </h1>
          <p>Front End Developer | React | Js | Passionate Learner</p>
          <div className="header-buttons">
            <a href="#about" className="btn primary-btn">About Me</a>
            <a href="#projects" className="btn secondary-btn">My Work</a>
          </div>
          <div className="social-links">
            <a href="https://github.com/Dineshkumarkota" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/dinesh-kumar-2639b2135/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:kumardinesh.kota@gmail.com" target="_blank" rel="noopener noreferrer">
            <i class="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </div>

       
      </div>
    </header>
  );
}

export default Header;

