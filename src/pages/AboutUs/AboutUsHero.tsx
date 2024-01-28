import { IHero } from '../../context/DataContext';

const AboutUsHero = ({ data }: { data: IHero }) => {
  return (
    <div className="flex items-end relative mb-48 sm:flex-col sm:items-start sm:mb-0 2sm:-mb-14 ">
      <div className="bg-ColorDark">
        <img src={data.image.desktop} className="opacity-60" />
      </div>
      <h1
        className="font-bold text-[240px] text-ColorLightGrey z-10 absolute right-0 top-20
      lg:text-[180px] lg:top-40 sm:hidden"
      >
        {data.headingLarge}
      </h1>
      <div
        className="bg-ColorWhite pl-36 pt-48 absolute right-0 
      before:bg-ColorGrey before:w-16 before:h-[1px] before:absolute before:left-36 before:top-32
      lg:pl-24 lg:pt-36 md:pl-12 md:pt-24 md:before:hidden sm:relative sm:pl-0 sm:pt-12 sm:-top-40 2sm:-top-48 2sm:px-4"
      >
        <h2 className="font-bold text-6xl max-w-sm mb-8 2sm:text-5xl">{data.heading}</h2>
        <p className="text-xl text-ColorDarkGrey max-w-lg">{data.paragraph}</p>
      </div>
    </div>
  );
};

export default AboutUsHero;
