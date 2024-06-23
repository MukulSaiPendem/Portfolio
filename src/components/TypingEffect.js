import React, { useState, useEffect } from 'react';
import './TypingEffect.css';
import phone from '../assets/icons/phone.png';
import email from '../assets/icons/email.png';
import git from '../assets/icons/git.png';
import linkedin from '../assets/icons/linkedin.png';
import leetcode from '../assets/icons/leetcode.png';

const TypingEffect = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "Hii, I'm Mukul Sai Pendem\nA Software Developer\n ";
  const typingSpeed = 75;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => {
        if (index < fullText.length) {
          return prev + fullText[index];
        }
        return prev;
      });
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="typing-container">
      {displayedText.split('\n').map((line, index) => (
        <h1 key={index}>
          {line}
          {index === 2 && (
            <span className="icons">
              <a href="tel:+18573401981" target="_blank" rel="noopener noreferrer">
                <img src={phone} alt="Phone" />
              </a>
              <a href="mailto:pendem.mu@northeastern.edu" target="_blank" rel="noopener noreferrer">
                <img src={email} alt="Email" />
              </a>
              <a href="https://www.linkedin.com/in/mukul-sai" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="https://github.com/MukulSaiPendem" target="_blank" rel="noopener noreferrer">
                <img src={git} alt="GitHub" />
              </a>
              <a href="https://leetcode.com/u/Mukul08/" target="_blank" rel="noopener noreferrer">
                <img src={leetcode} alt="LeetCode" />
              </a>
            </span>
          )}
        </h1>
      ))}
    </div>
  );
};

export default TypingEffect;
