import React from 'react';
import { ISlide } from '../../context/DataContext';
import Button from '../../components/Button';

type IHomeSlideItem = {
  data: ISlide;
  isVisible: boolean;
};

const HomeSlideItem = ({ data, isVisible }: IHomeSlideItem) => {
  return (
    <div
      style={{ gridArea: '1/1' }}
      className={
        (isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none') +
        ' bg-ColorDark relative'
      }
    >
      <img
        className={
          (isVisible ? 'opacity-40' : 'opacity-20') +
          ' object-cover object-bottom w-full h-[680px] transition-opacity duration-500 sm:h-[580px]'
        }
        src={data.images.desktop}
        alt="Slide image"
      />
      <div className="flex items-center absolute w-full h-full left-0 top-0">
        <div
          className={
            (isVisible
              ? 'translate-x-0 opacity-100'
              : '-translate-x-6 opacity-0') +
            ' ml-48 transition-all duration-500 lg:mx-auto md:px-6 2sm:flex 2sm:flex-col 2sm:items-center 2sm:text-center'
          }
        >
          <h2 className="font-bold text-8xl text-ColorWhite max-w-lg mb-4 sm:text-6xl">
            {data.title}
          </h2>
          <p className="text-xl text-ColorWhite max-w-lg mb-6">
            {data.content}
          </p>
          <Button to="/portfolio">See Our Portfolio</Button>
        </div>
      </div>
    </div>
  );
};

export default HomeSlideItem;
