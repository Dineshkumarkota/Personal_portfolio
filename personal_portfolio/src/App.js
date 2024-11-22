import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ProjectList from './components/ProjectList';
import Contact from './components/Contact';
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ProjectList />
      <Skills/>
      <Contact />
     
    </div>
  );
}

export default App;
