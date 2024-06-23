import React from 'react';
import ModelCanvas from './components/Model';
import NavBar from './components/NavBar';
import TypingEffect from './components/TypingEffect';
import Story from './components/Story'
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
      </section>
      <section id="story" className="content-section">
        <Story />
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
