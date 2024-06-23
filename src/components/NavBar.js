import React from 'react';
import './NavBar.css';
import storyIcon from '../assets/icons/dancing.png';
import experienceIcon from '../assets/icons/brainstorming.png';
import projectsIcon from '../assets/icons/man.png';
import skillsIcon from '../assets/icons/gender-fluid.png';
import contactIcon from '../assets/icons/phone-call.png';
import logo from '../assets/marioM.png';

const NavBar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#story">
              <img src={storyIcon} alt="Story Icon" className="icon" />
              Story
            </a>
          </li>
          <li>
            <a href="#experience">
              <img src={experienceIcon} alt="Experience Icon" className="icon" />
              Experience
            </a>
          </li>
          <li>
            <a href="#projects">
              <img src={projectsIcon} alt="Projects Icon" className="icon" />
              Projects
            </a>
          </li>
          <li>
            <a href="#skills">
              <img src={skillsIcon} alt="Skills Icon" className="icon" />
              Skills
            </a>
          </li>
          <li>
            <a href="#contact">
              <img src={contactIcon} alt="Contact Icon" className="icon" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  };
  

export default NavBar;
