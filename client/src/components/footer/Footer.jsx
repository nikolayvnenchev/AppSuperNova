import React from 'react';
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <p>
          You can also find us on social media{' '}
        </p>
        {/* <a
          style={{ color: 'blue' }}
          className="hover-softuni text-neutral-800 font-bold dark:text-neutral-400"
          href="https://softuni.bg/"
        >SoftUni</a> */}
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 2.04c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm1.27 12.34h-2.4v6.64h-2.5v-6.64h-1.7v-2.4h1.7v-1.8c0-2.48 1.42-3.8 3.71-3.8 1.08 0 2.08.08 2.36.12v2.5h-1.67c-1.31 0-1.64.62-1.64 1.58v1.92h3.35l-.5 2.4h-2.85v6.64z" />
            </svg>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="white" />
            </svg>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0H5C3.9 0 3 .9 3 2v20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2zm-9 17H7v-6h3v6zm-1.5-7.1c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM19 17h-3v-6h3v6zm0-7h-3V7h3v3z" fill="white" />
            </svg>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 15l5-3-5-3v6zm12-3c0 2.2-1.8 4-4 4h-16c-2.2 0-4-1.8-4-4V9c0-2.2 1.8-4 4-4h16c2.2 0 4 1.8 4 4v3zm-2 0V9H4v6h16z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}