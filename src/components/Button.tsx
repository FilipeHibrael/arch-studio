import React from 'react';
// @ts-ignore
import ArrowIcon from '../assets/icons/arrow-icon.svg?react';
import { Link, LinkProps } from 'react-router-dom';

type IButton = LinkProps & {
  children: React.PropsWithChildren;
};

const Button = ({ to, children }: IButton) => {
  return (
    <Link
      className="flex items-center gap-5 text-xl text-ColorWhite bg-ColorDark 
      max-w-max px-8 py-6 hover:bg-ColorDarkGrey transition-colors duration-300"
      to={to}
    >
      {children}

      <ArrowIcon />
    </Link>
  );
};

export default Button;
