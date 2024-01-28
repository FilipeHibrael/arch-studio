import { IHeritage } from '../../context/DataContext';

const AboutUsHeritage = ({ data }: { data: IHeritage }) => {
  return (
    <div className="flex justify-between items-end gap-4 mb-48 lg:justify-center sm:mb-24 2sm:px-4">
      <div>
        <h2 className="font-bold text-6xl max-w-xs mb-8 2sm:text-5xl">{data.heading}</h2>
        <div
          className="flex flex-col gap-6 relative before:bg-ColorGrey 
          before:w-16 before:h-[1px] before:absolute before:left-0 before:-top-[242px] 2sm:before:-top-[120px]"
        >
          {Object.values(data.paragraphs).map((paragraph, index) => (
            <p key={index} className="text-xl text-ColorDarkGrey max-w-lg">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className='lg:hidden'>
        <img src={data.heritageImg} />
      </div>
    </div>
  );
};

export default AboutUsHeritage;
