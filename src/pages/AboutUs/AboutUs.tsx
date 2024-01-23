import React from 'react';
import { useData } from '../../context/DataContext';
import AboutUsHero from './AboutUsHero';
import AboutUsHeritage from './AboutUsHeritage';
import AboutUsLeaders from './AboutUsLeaders';

const AboutUs = () => {
  const { data, loading, error } = useData();

  if (!data) return null;
  return (
    <section>
      <AboutUsHero data={data.aboutData.hero} />
      <AboutUsHeritage data={data.aboutData.heritage}/>
      <AboutUsLeaders data={data.aboutData.leaders} />
    </section>
  );
};

export default AboutUs;
