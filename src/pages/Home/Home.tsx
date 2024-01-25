import React from 'react';
import { useData } from '../../context/DataContext';
import HomeWelcome from './HomeWelcome';
import HomeBanner from './HomeBanner';
import HomeFeatured from './HomeFeatured';
import HomeSlide from './HomeSlide';
import Loading from '../../components/helper/Loading';
import Error from '../../components/helper/Error';

const Home = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section>
        <HomeSlide data={data.slider} />
        <HomeWelcome data={data.HomePageWelcome} />
        <HomeBanner data={data.HomePageBannerImgs} />
        <HomeFeatured data={data.portfolioData} />
      </section>
    );
  else return null;
};

export default Home;
