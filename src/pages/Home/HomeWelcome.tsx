import { IHomePageWelcome } from '../../context/DataContext';

const HomeWelcome = ({ data }: { data: IHomePageWelcome }) => {
  return (
    <div>
      <h1 className="font-bold text-[240px] text-ColorLightGrey z-10 relative">
        Welcome
      </h1>
      <div className="flex gap-32 flex-wrap justify-end items-end -translate-y-48">
        <div>
          <h2 className="font-bold text-6xl max-w-xs mb-6">{data.heading}</h2>
          <div className="flex flex-col gap-4">
            {Object.values(data.paragraphs).map((paragraph) => (
              <p className=" text-xl text-ColorDarkGrey max-w-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div>
          <img src={data.img} />
        </div>
      </div>
    </div>
  );
};

export default HomeWelcome;
