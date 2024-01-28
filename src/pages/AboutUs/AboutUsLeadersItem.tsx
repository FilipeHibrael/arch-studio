import { ILeaderInfo } from '../../context/DataContext';
// @ts-ignore
import LinkedinIcon from '../../assets/icons/linkedin-icon.svg?react';
// @ts-ignore
import TwitterIcon from '../../assets/icons/twitter-icon.svg?react';

const AboutUsLeadersItem = ({ data }: { data: ILeaderInfo }) => {
  return (
    <div className='max-w-max'>
      <div className="group bg-ColorDark mb-4 relative lg:pointer-events-none">
        <img
          src={data.img}
          alt="Leader image"
          className="group-hover:opacity-40 transition-opacity duration-300"
        />
        <div
          className="flex items-center gap-6 justify-center bg-transparent w-full h-full 
        opacity-0 translate-y-8 absolute left-0 top-0 group-hover:opacity-100 
        group-hover:translate-y-0 transition-all duration-300 lg:hidden"
        >
          <a href="#" onClick={(event) => event.preventDefault()}>
            <LinkedinIcon />
          </a>
          <a href="#" onClick={(event) => event.preventDefault()}>
            <TwitterIcon />
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-2xl">{data.name}</h3>
        <span className="block text-ColorDarkGrey text-xl font-light lg:mb-2">
          {data.role}
        </span>
        <div className="hidden items-center gap-6 lg:flex">
          <a href="#" onClick={(event) => event.preventDefault()}>
            <LinkedinIcon className="brightness-0" />
          </a>
          <a href="#" onClick={(event) => event.preventDefault()}>
            <TwitterIcon className="brightness-0" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUsLeadersItem;
