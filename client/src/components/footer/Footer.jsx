import React from 'react';
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <p>
          Contact us + 359 899 223 016 !
        </p>
        <div className="phone-icons">
          <p>
            Fast chat via{' '}
          </p>
          <a href="https://account.viber.com/bg/login" target="_blank" rel="noopener noreferrer">
            <img src="/viber.png" alt="" />
          </a>
          <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img src="/whatsapp.png" alt="" />
          </a>
          <a href="https://web.telegram.org/a/" target="_blank" rel="noopener noreferrer">
            <img src="/telegram.png" alt="" />
          </a>
        </div>
        <div className="social-icons">
          <p>
            Social media{' '}
          </p>
          <a href="https://www.facebook.com/share/1MrW2YB8u7/" target="_blank" rel="noopener noreferrer">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/supernova.realestate?igsh=MWdlN3RpbXZiejJuYQ==" target="_blank" rel="noopener noreferrer">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.tiktok.com/@supernovarealestate?_t=ZN-8taiQiDHtf4&_r=1" target="_blank" rel="noopener noreferrer">
            <img src="/TikTok.png" alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
}