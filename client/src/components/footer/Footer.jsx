import React from 'react';
import "./navbar.scss";

export default function Footer() {
  return (
    <footer>
      <div className="p-4 text-neutral-700 dark:text-neutral-200">
        This site was created as an exam project in{' '}
        <a
          style={{ color: 'blue' }}
          className="hover-softuni text-neutral-800 font-bold dark:text-neutral-400"
          href="https://softuni.bg/"
        >SoftUni</a>
      </div>
    </footer>
  );
}