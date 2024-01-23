import { IHero } from '../../context/DataContext';

const AboutUsHero = ({ data }: { data: IHero }) => {
  return (
    <div className="flex items-end relative mb-48">
      <div className="bg-ColorDark">
        <img src={data.image.desktop} className="opacity-60" />
      </div>
      <h1 className="font-bold text-[240px] text-ColorLightGrey z-10 absolute right-0 top-20">
        {data.headingLarge}
      </h1>
      <div
        className="bg-ColorWhite pl-36 pt-48 absolute right-0 
      before:bg-ColorGrey before:w-16 before:h-[1px] before:absolute before:left-36 before:top-32"
      >
        <h2 className="font-bold text-6xl max-w-sm mb-8">{data.heading}</h2>
        <p className="text-xl text-ColorDarkGrey max-w-lg">{data.paragraph}</p>
      </div>
    </div>
  );
};

export default AboutUsHero;
