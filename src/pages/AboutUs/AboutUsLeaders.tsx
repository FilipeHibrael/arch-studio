import { ILeaders } from '../../context/DataContext';
import AboutUsLeadersItem from './AboutUsLeadersItem';

const AboutUsLeaders = ({ data }: { data: ILeaders }) => {
  return (
    <div className="flex justify-between mb-48 lg:flex-col lg:gap-8 sm:mb-24 2sm:px-4">
      <h2 className="font-bold text-6xl max-w-56">{data.heading}</h2>
      <div className="grid grid-cols-2 gap-y-12 gap-x-6 sm:grid-cols-1">
        {data.leadersInfo.map((item) => (
          <AboutUsLeadersItem data={item} />
        ))}
      </div>
    </div>
  );
};

export default AboutUsLeaders;
