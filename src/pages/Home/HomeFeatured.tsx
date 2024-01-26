import React from 'react';
import Button from '../../components/Button';
import { IPortfolioItem } from '../../context/DataContext';
import HomeFeaturedItem from './HomeFeaturedItem';

const HomeFeatured = ({ data }: { data: IPortfolioItem[] }) => {
  return (
    <div className="mb-48 2sm:px-4 sm:mb-24">
      <div className="flex items-center justify-between mb-14 sm:mb-6">
        <h2 className="font-bold text-6xl">Featured</h2>
        <div className="sm:hidden">
          <Button to="/portfolio">See All</Button>
        </div>
      </div>
      <div className="flex justify-between gap-10 md:flex-col sm:mb-6 2sm:gap-4">
        {data
          .filter((item) => item.id === 4 || item.id === 6 || item.id === 5)
          .map((item, index) => (
            <HomeFeaturedItem key={index} data={item} index={index} />
          ))}
      </div>
      <div className="hidden justify-center sm:flex">
          <Button to="/portfolio">See All</Button>
        </div>
    </div>
  );
};

export default HomeFeatured;
