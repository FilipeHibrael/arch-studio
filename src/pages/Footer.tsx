import { Link } from 'react-router-dom';
// @ts-ignore
import ArchLogo from '../assets/logo-white.svg?react';
import Button from '../components/Button';

const Footer = () => {
  return (
    <footer className="grid items-center bg-ColorLightGrey grid-cols-footer shadow-boxShadowFooter lg:flex lg:flex-col lg:gap-6 lg:shadow-none">
      <Link
        to="/"
        className="bg-ColorDark px-10 py-16 lg:px-6 lg:py-10 lg:-translate-y-8"
      >
        <ArchLogo />
      </Link>
      <nav className="lg:-translate-y-8">
        <ul className="flex gap-12 text-xl ml-24 text-ColorDarkGrey lg:ml-0 2sm:flex-col 2sm:text-center">
          <li>
            <Link
              className="py-4 hover:text-ColorDark transition-colors"
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="py-4 hover:text-ColorDark transition-colors"
              to="/about-us"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="py-4 hover:text-ColorDark transition-colors"
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="lg:-translate-y-8">
        <Button to="/portfolio">See Our Portfolio</Button>
      </div>
    </footer>
  );
};

export default Footer;
