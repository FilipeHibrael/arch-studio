import { Link, useLocation, useParams } from 'react-router-dom';
import logo from '../assets/logo.svg';
import React from 'react';

const Header = () => {
  const [pageName, setPageName] = React.useState('');
  const { pathname } = useLocation();

  const [menuMobile, setMenuMobile] = React.useState(false);

  React.useEffect(() => {
    if (pathname === '/portfolio') setPageName('PORTFOLIO');
    else if (pathname === '/about-us') setPageName('ABOUT US');
    else if (pathname === '/contact') setPageName('CONTACT');
    else setPageName('HOME');
  }, [pathname]);

  return (
    <header
      className="flex items-center gap-24 my-12 relative 
    before:block before:bg-ColorGrey before:w-[1px] before:h-24 
    before:-left-[102px] before:-top-12 before:absolute 
    xl:before:-left-12 md:before:-left-6 sm:gap-0 sm:justify-between 
    2sm:before:hidden 2sm:my-6 2sm:px-4 z-40"
    >
      <span
        className="font-light text-ColorGrey text-2xl tracking-[0.8rem] 
        origin-top-left rotate-90 absolute -left-[88px] -bottom-20 
        xl:-left-[34px] md:text-xl md:-left-[12px] 2sm:hidden"
      >
        {pageName}
      </span>
      <Link to="/">
        <img src={logo} alt="Arch Studio Logo" />
      </Link>
      <nav
        className={
          (menuMobile ? '2sm:translate-x-0' : '2sm:translate-x-[100%]') +
          ' bg-ColorWhite 2sm:w-svw 2sm:pb-4 2sm:absolute 2sm:-bottom-[168px] 2sm:right-0 transition-transform duration-300 2sm:z-20'
        }
      >
        <ul
          className="flex gap-12 text-xl text-ColorDarkGrey sm:gap-4 
        2sm:flex-col 2sm:text-2xl 2sm:text-ColorDark 2sm:w-full 2sm:items-center"
        >
          <li>
            <Link
              className="py-4 hover:text-ColorDark transition-colors"
              to="/portfolio"
              onClick={() => setMenuMobile(false)}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="py-4 hover:text-ColorDark transition-colors"
              to="/about-us"
              onClick={() => setMenuMobile(false)}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              className="py-4 hover:text-ColorDark transition-colors"
              to="/contact"
              onClick={() => setMenuMobile(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => setMenuMobile(!menuMobile)}
        className="hidden flex-col gap-2 2sm:flex"
      >
        <span className="block :active bg-ColorDark w-10 h-1"></span>
        <span className="block bg-ColorDark w-10 h-1"></span>
        <span className="block bg-ColorDark w-10 h-1"></span>
      </button>
    </header>
  );
};

export default Header;
