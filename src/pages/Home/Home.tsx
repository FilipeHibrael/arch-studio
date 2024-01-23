import React from 'react';
import { useData } from '../../context/DataContext';
import HomeWelcome from './HomeWelcome';
import HomeBanner from './HomeBanner';
import HomeFeatured from './HomeFeatured';

const Home = () => {
  const { data, loading, error } = useData();

  if (!data) return null;
  return (
    <section>
      <HomeWelcome data={data.HomePageWelcome} />
      <HomeBanner data={data.HomePageBannerImgs} />
      <HomeFeatured data={data.portfolioData}/>
    </section>
  );
};

export default Home;
