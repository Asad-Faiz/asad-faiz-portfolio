import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Asad Faiz</h3>
          <p>Professional Flutter Developer specializing in high-performance iOS, Android, and macOS cross-platform systems.</p>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
            📍 Faisalabad, Punjab (Relocating to Lahore / Islamabad)
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h4>Contact Info</h4>
            <a href="mailto:MuhammadAsadFaiz2000@gmail.com">📧 MuhammadAsadFaiz2000@gmail.com</a>
            <a href="tel:03096151773">📞 03096151773</a>
          </div>
          <div className="footer-column">
            <h4>Social Channels</h4>
            <a href="https://github.com/Asad-Faiz" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/asad-faiz-947a69246/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Asad Faiz. All rights reserved.</p>
      </div>
    </footer>
  );
};
