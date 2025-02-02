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
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect fill="#1877f2" height="512" rx="15%" width="512"/><path d="m355.6 330 11.4-74h-71v-48c0-20.2 9.9-40 41.7-40h32.3v-63s-29.3-5-57.3-5c-58.5 0-96.7 35.4-96.7 99.6v56.4h-65v74h65v182h80v-182z" fill="#fff"/></svg>
              {/* <path d="M9 8H6V6h3V4h2v2h3v2h-3v8H9v-8H6V8h3z" fill="white" />
            </svg> */}
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