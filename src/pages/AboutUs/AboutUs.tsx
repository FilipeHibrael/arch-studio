import React from 'react';
import { useData } from '../../context/DataContext';
import AboutUsHero from './AboutUsHero';
import AboutUsHeritage from './AboutUsHeritage';
import AboutUsLeaders from './AboutUsLeaders';
import Error from '../../components/helper/Error';
import Loading from '../../components/helper/Loading';

const AboutUs = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section>
        <AboutUsHero data={data.aboutData.hero} />
        <AboutUsHeritage data={data.aboutData.heritage} />
        <AboutUsLeaders data={data.aboutData.leaders} />
      </section>
    );
  else return null;
};

export default AboutUs;
