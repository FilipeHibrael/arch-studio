import { IHomePageWelcome } from '../../context/DataContext';

const HomeWelcome = ({ data }: { data: IHomePageWelcome }) => {
  return (
    <div className="lg:mb-24 2sm:px-4">
      <h1 className="font-bold text-[240px] text-ColorLightGrey z-10 relative 
      lg:text-9xl sm:text-8xl 2sm:hidden">
        Welcome
      </h1>
      <div className="flex gap-32 flex-wrap justify-end items-end -translate-y-48 2xl:justify-between 2xl:gap-0 lg:translate-y-0">
        <div>
          <h2 className="font-bold text-6xl max-w-xs mb-6">{data.heading}</h2>
          <div className="flex flex-col gap-4">
            {Object.values(data.paragraphs).map((paragraph, index) => (
              <p
                key={index}
                className="text-xl text-ColorDarkGrey max-w-lg lg:max-w-[620px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="lg:hidden">
          <img src={data.img} />
        </div>
      </div>
    </div>
  );
};

export default HomeWelcome;
