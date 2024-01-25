import Error from '../../components/helper/Error';
import Loading from '../../components/helper/Loading';
import { useData } from '../../context/DataContext';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactHero from './ContactHero';
import ContactMap from './ContactMap';

const Contact = () => {
  const { data, loading, error } = useData();

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
  return (
    <section>
      <ContactHero data={data.contactData.hero} />
      <ContactDetails data={data.contactData.sectionDetailsAndMap.offices} />
      <ContactMap data={data.contactData.sectionDetailsAndMap} />
      <ContactForm />
    </section>
  );
  else return null
};

export default Contact;
