import React from 'react';
import '../styles/AboutMe.css';

function AboutMe() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* Left Section */}
        <div className="about-photo">
          <img 
            src="/images/myImage.jpg" 
            alt="Dinesh Kumar Kota" 
          />
        </div>

        {/* Right Section */}
        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm a passionate Full Stack Developer with a strong background in building efficient
            web applications using React and Node.js. I enjoy solving complex problems and 
            creating user-friendly designs.
          </p>
          <div className="skills">
            <h3>Skills:</h3>
            <span className="skill-badge">React</span>
            <span className="skill-badge">Node.js</span>
            <span className="skill-badge">JavaScript</span>
            <span className="skill-badge">HTML & CSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;


