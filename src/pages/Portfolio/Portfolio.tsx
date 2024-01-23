import React from 'react';
import { useData } from '../../context/DataContext';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const { data, loading, error } = useData();

  if (!data) return null;
  return (
    <section className='grid grid-cols-3 gap-8 mb-48'>
      {data.portfolioData.map((item, index) => (
        <PortfolioItem key={index} data={item} />
      ))}
    </section>
  );
};

export default Portfolio;
