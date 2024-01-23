import React from 'react';
import { IPortfolioItem } from '../../context/DataContext';

type IHomeFeaturedItem = {
  data: IPortfolioItem;
  index: number;
};

const HomeFeaturedItem = ({ data, index }: IHomeFeaturedItem) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.image.desktop})` }}
      className="w-full h-[540px] bg-cover bg-bottom"
    >
      <div
        style={{ background: 'rgba(0, 0, 0, 0.2)' }}
        className="flex flex-col justify-end pb-8 pl-8 h-full relative"
      >
        <span className="font-bold text-ColorWhite text-[240px] opacity-50 absolute -right-4 -top-6 pointer-events-none">
          {index + 1}
        </span>
        <h3 className="text-ColorWhite font-bold text-4xl">{data.title}</h3>
        <a href="#" className="text-ColorWhite py-1">
          View All Projects
        </a>
      </div>
    </div>
  );
};

export default HomeFeaturedItem;
