import React from 'react';
import { useData } from '../../context/DataContext';
import PortfolioItem from './PortfolioItem';
import Loading from '../../components/helper/Loading';
import Error from '../../components/helper/Error';

const Portfolio = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <section className="grid grid-cols-3 gap-8 mb-48">
        {data.portfolioData.map((item, index) => (
          <PortfolioItem key={index} data={item} />
        ))}
      </section>
    );
  else return null;
};

export default Portfolio;
