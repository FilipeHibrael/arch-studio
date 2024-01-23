import React from 'react';
import Button from '../../components/Button';
import { IPortfolioItem } from '../../context/DataContext';
import HomeFeaturedItem from './HomeFeaturedItem';

const HomeFeatured = ({ data }: { data: IPortfolioItem[] }) => {
  return (
    <div className='mb-48'>
      <div className="flex items-center justify-between mb-14">
        <h2 className="font-bold text-6xl">Featured</h2>
        <Button>See All</Button>
      </div>
      <div className='flex justify-between gap-10'>
        {data
          .filter((item) => item.id === 4 || item.id === 6 || item.id === 5)
          .map((item, index) => (
            <HomeFeaturedItem data={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default HomeFeatured;
