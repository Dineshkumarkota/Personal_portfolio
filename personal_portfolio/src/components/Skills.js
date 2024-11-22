import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNodeJs, FaLinux, FaDatabase } from 'react-icons/fa';
import { Button } from '@mui/material';
import '../styles/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-item">
          <FaHtml5 size={60} color="#e34f26" />
          <p>HTML</p>
        </div>
        <div className="skill-item">
          <FaCss3Alt size={60} color="#1572B6" />
          <p>CSS</p>
        </div>
        <div className="skill-item">
          <FaJs size={60} color="#F7DF1E" />
          <p>JavaScript</p>
        </div>
        <div className="skill-item">
          <FaReact size={60} color="#61DBFB" />
          <p>React</p>
        </div>
        <div className="skill-item">
          <FaNodeJs size={60} color="#68A063" />
          <p>Node JS</p>
        </div>
        <div className="skill-item">
          <FaGitAlt size={60} color="#F05032" />
          <p>Git</p>
        </div>
        <div className="skill-item">
          <FaLinux size={60} color="#FCC624" />
          <p>Linux</p>
        </div>
        <div className="skill-item">
          <FaDatabase size={60} color="#47A248" />
          <p>MongoDB</p>
        </div>
      </div>
      <Button variant="contained" color="primary" href="#projects" className="view-projects-btn">
        View Projects
      </Button>
    </section>
  );
}

export default Skills;
