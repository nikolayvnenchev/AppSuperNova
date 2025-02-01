import React from 'react';
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <p>
          This site was created as an exam project in{' '}
        </p>
        <a
          style={{ color: 'blue' }}
          className="hover-softuni text-neutral-800 font-bold dark:text-neutral-400"
          href="https://softuni.bg/"
        >SoftUni</a>
      </div>
    </footer>
  );
}