import React from 'react';
import useFetch from '../hooks/useFetch';

export type IImage = {
  desktop: string;
  tablet: string;
  mobile: string;
};

export type ISlide = {
  title: string;
  content: string;
  images: IImage;
};

export type IHomePageWelcome = {
  img: string;
  heading: string;
  paragraphs: {
    one: string;
    two: string;
    three: string;
  };
};

export type IHero = {
  image: IImage;
  headingLarge: string;
  heading: string;
  paragraph: string;
};

export type IHeritage = {
  heritageImg: string;
  heading: string;
  paragraphs: {
    one: string;
    two: string;
    three: string;
  };
};

export type ILeaderInfo = {
  name: string;
  role: string;
  img: string;
};

export type ILeaders = {
  heading: string;
  leadersInfo: ILeaderInfo[];
};

type IAboutData = {
  hero: IHero;
  heritage: IHeritage;
  leaders: ILeaders;
};

export type IOffice = {
  name: string;
  mail: string;
  address: string;
  phone: string;
  coordinates: {
    lat: number;
    lng: number;
  };
};

type IDefaultMap = {
  coordinates: {
    lat: number;
    lng: number;
  };
  zoom: number;
};

export type ISectionDetailsAndMap = {
  offices: IOffice[];
  defaultMap: IDefaultMap;
};

type IContactData = {
  hero: IHero;
  sectionDetailsAndMap: ISectionDetailsAndMap;
};

export type IPortfolioItem = {
  id: number;
  title: string;
  date: string;
  image: IImage;
};

type IData = {
  slider: ISlide[];
  HomePageWelcome: IHomePageWelcome;
  HomePageBannerImgs: IImage;
  aboutData: IAboutData;
  contactData: IContactData;
  portfolioData: IPortfolioItem[];
};

type IDataContext = {
  data: IData | null;
  loading: boolean;
  error: string | null;
};

const DataContext = React.createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);
  if (!context) throw new Error('useData precisa estar em DataContextProvider');
  return context;
};

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {
  const { data, loading, error } = useFetch<IData>('./public/data.json');

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}
    </DataContext.Provider>
  );
};
