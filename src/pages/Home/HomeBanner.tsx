import React from 'react';
import { IImage } from '../../context/DataContext';
import Button from '../../components/Button';

const HomeBanner = ({ data }: { data: IImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${data.desktop})` }}
      className="bg-no-repeat bg-center bg-cover h-[540px] mb-48 sm:mb-24"
    >
      <div
        style={{ background: 'rgba(0, 0, 0, 0.5)' }}
        className="flex flex-col justify-center h-full"
      >
        <div className="ml-48 md:ml-12 sm:ml-6">
          <h2 className="font-bold text-6xl text-ColorWhite max-w-xs mb-8 2sm:text-5xl  ">
            Small team, big ideas
          </h2>
          <Button to="/about-us">About Us</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
