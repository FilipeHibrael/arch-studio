import React from 'react';
import { useData } from '../../context/DataContext';
import HomeWelcome from './HomeWelcome';
import HomeBanner from './HomeBanner';
import HomeFeatured from './HomeFeatured';
import HomeSlide from './HomeSlide';

const Home = () => {
  const { data, loading, error } = useData();

  if (!data) return null;
  return (
    <section>
      <HomeSlide data={data.slider}/>
      <HomeWelcome data={data.HomePageWelcome} />
      <HomeBanner data={data.HomePageBannerImgs} />
      <HomeFeatured data={data.portfolioData}/>
    </section>
  );
};

export default Home;
