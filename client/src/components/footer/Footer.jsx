import React from 'react';
import "./footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="footerContainer">
        <div className="phone-icons">
          <p>
            Fast chat via{' '}
          </p>
          <img src="/viber.png" alt="" />
          <img src="/whatsapp.png" alt="" />
          <img src="/telegram.png" alt="" />
          <p>
          {' '}on + 359 899 223 016 !
          </p>
        </div>
        <div className="social-icons">
          <p>
            You can also find us on social media{' '}
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