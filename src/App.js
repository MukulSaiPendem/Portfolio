import React from 'react';
import ModelCanvas from './components/Model';
import NavBar from './components/NavBar';
import TypingEffect from './components/TypingEffect';
import Story from './components/Story'
import Skills from './components/Skills';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home" className="home-section">
        <div className="text-wrapper">
          <TypingEffect />
        </div>
        <div className="model-wrapper">
          <ModelCanvas />
        </div>
        <svg class="arrows">
          <path class="a1" d="M0 0 L30 32 L60 0"></path>
          <path class="a2" d="M0 20 L30 52 L60 20"></path>
          <path class="a3" d="M0 40 L30 72 L60 40"></path>
        </svg>
      </section>
      <section id="story" className="content-section">
        <Story />
      </section>
      <section id="skills" className="content-section">
        <Skills />
      </section>
      <section id="experience" className="content-section">
        <h2>Experience</h2>
        {/* Add your content here */}
      </section>
      <section id="projects" className="content-section">
        <h2>Projects</h2>
        {/* Add your content here */}
      </section>

      <section id="contact" className="content-section">
        <h2>Contact</h2>
        {/* Add your content here */}
      </section>
    </div>
  );
}

export default App;
