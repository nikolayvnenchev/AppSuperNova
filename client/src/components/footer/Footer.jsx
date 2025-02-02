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
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}