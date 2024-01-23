import React from 'react';
// @ts-ignore
import ArchLogo from '../assets/logo-white.svg?react';
import Button from '../components/Button';

const Footer = () => {
  return (
    <footer
      style={{
        gridTemplateColumns: 'auto 1fr auto',
        boxShadow: 'inset -120px 0 0 0 white',
      }}
      className="grid items-center bg-ColorLightGrey"
    >
      <div className="bg-ColorDark px-10 py-16">
        <ArchLogo />
      </div>
      <nav>
        <ul className="flex gap-12 text-xl ml-24 text-ColorDarkGrey">
          <li>
            <a className="py-4 hover:text-ColorDark transition-colors" href="#">
              Portfolio
            </a>
          </li>
          <li>
            <a className="py-4 hover:text-ColorDark transition-colors" href="#">
              About Us
            </a>
          </li>
          <li>
            <a className="py-4 hover:text-ColorDark transition-colors" href="#">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <Button>See Our Portfolio</Button>
    </footer>
  );
};

export default Footer;
