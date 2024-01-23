import React from 'react';
import { IImage } from '../../context/DataContext';
import Button from '../../components/Button';

const HomeBanner = ({ data }: { data: IImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.desktop})` }}
      className="bg-no-repeat bg-center bg-cover h-[540px] mb-48"
    >
      <div
        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        className="flex flex-col justify-center h-full"
      >
        <div className="ml-48">
          <h2 className="font-bold text-6xl text-ColorWhite max-w-xs mb-8">
            Small team, big ideas
          </h2>
          <Button>About Us</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
