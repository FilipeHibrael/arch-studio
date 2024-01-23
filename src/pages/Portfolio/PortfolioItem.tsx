import React from 'react';
import { IPortfolioItem } from '../../context/DataContext';

const PortfolioItem = ({ data }: { data: IPortfolioItem }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.image.desktop})` }}
      className="w-full h-[560px] bg-cover bg-bottom"
    >
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        className="flex flex-col justify-end pb-8 pl-8 h-full hover:opacity-60 duration-300"
      >
        <h3 className="text-ColorWhite font-bold text-4xl">{data.title}</h3>
        <span className="text-ColorWhite">{data.date}</span>
      </a>
    </div>
  );
};

export default PortfolioItem;
