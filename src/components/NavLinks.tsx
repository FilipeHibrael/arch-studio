import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
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
  );
};

export default NavLinks;
