import React from 'react';
import { ISlide } from '../../context/DataContext';
import HomeSlideItem from './HomeSlideItem';

const HomeSlide = ({ data }: { data: ISlide[] }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function changeCurrentIndex() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  }

  function handleClick(index: number) {
    setCurrentIndex(index);
  }

  React.useEffect(() => {
    const timeoutId = setTimeout(() => changeCurrentIndex(), 3000);
    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <div className='lg:mb-24'>
      <div className='grid'>
        {data.map((item, index) => (
          <HomeSlideItem
            key={index}
            data={item}
            isVisible={currentIndex === index}
          />
        ))}
      </div>
      <div className="-translate-y-20 -translate-x-20 xl:hidden">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            className={
              (index === currentIndex
                ? 'bg-ColorDark text-ColorWhite'
                : 'bg-ColorWhite text-ColorGrey hover:bg-ColorLightGrey') +
              ' text-xl w-20 h-20 transition-colors duration-500'
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeSlide;
