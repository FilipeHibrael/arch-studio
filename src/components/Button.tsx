import React from 'react';
// @ts-ignore
import ArrowIcon from '../assets/icons/arrow-icon.svg?react';

const Button = ({ children }: React.PropsWithChildren) => {
  return (
    <a
      href="#"
      className="flex items-center gap-5 text-xl text-ColorWhite bg-ColorDark 
      max-w-max px-8 py-6 hover:bg-ColorDarkGrey transition-colors duration-300"
    >
      {children}
      <ArrowIcon />
    </a>
  );
};

export default Button;
