import { Link, useLocation, useParams } from 'react-router-dom';
import logo from '../assets/logo.svg';
import React from 'react';

const Header = () => {
  const [pageName, setPageName] = React.useState('');
  const { pathname } = useLocation();

  React.useEffect(() => {
    if (pathname === '/portfolio') setPageName('PORTFOLIO');
    else if (pathname === '/about-us') setPageName('ABOUT US');
    else if (pathname === '/contact') setPageName('CONTACT');
    else setPageName('HOME');
  }, [pathname]);

  return (
    <header
      className="flex items-center my-12 relative 
    before:block before:bg-ColorGrey before:w-[1px] before:h-24 
    before:-left-[102px] before:-top-12 before:absolute"
    >
      <span
        className="font-light text-ColorGrey text-2xl tracking-[0.8rem] 
        origin-top-left rotate-90 absolute -left-[88px] -bottom-20"
      >
        {pageName}
      </span>
      <Link to="/">
        <img src={logo} alt="Arch Studio Logo" />
      </Link>
      <nav>
        <ul className="flex gap-12 text-xl ml-24 text-ColorDarkGrey">
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
    </header>
  );
};

export default Header;
