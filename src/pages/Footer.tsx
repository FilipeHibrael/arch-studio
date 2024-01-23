import { Link } from 'react-router-dom';
// @ts-ignore
import ArchLogo from '../assets/logo-white.svg?react';
import Button from '../components/Button';
import NavLinks from '../components/NavLinks';

const Footer = () => {
  return (
    <footer
      style={{
        gridTemplateColumns: 'auto 1fr auto',
        boxShadow: 'inset -120px 0 0 0 white',
      }}
      className="grid items-center bg-ColorLightGrey"
    >
      <Link to='/' className="bg-ColorDark px-10 py-16">
        <ArchLogo />
      </Link>
      <NavLinks/>
      <Button to='/portfolio' >See Our Portfolio</Button>
    </footer>
  );
};

export default Footer;
