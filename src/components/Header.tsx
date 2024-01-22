import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header
      className="flex items-center my-12 relative 
    before:block before:bg-ColorGrey before:w-[1px] before:h-24 
    before:-left-[102px] before:-top-12 before:absolute"
    >
      <span
        className="font-light text-ColorGrey text-2xl tracking-[0.8rem] 
      rotate-90 absolute -left-40 -bottom-32"
      >
        HOME
      </span>
      <img src={logo} alt="Arch Studio Logo" />
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
    </header>
  );
};

export default Header;
