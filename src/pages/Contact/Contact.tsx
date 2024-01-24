import { useData } from '../../context/DataContext';
import ContactDetails from './ContactDetails';
import ContactForm from './ContactForm';
import ContactHero from './ContactHero';

const Contact = () => {
  const { data, loading, error } = useData();

  if (!data) return null;
  return (
    <section>
      <ContactHero data={data.contactData.hero} />
      <ContactDetails data={data.contactData.sectionDetailsAndMap.offices} />
      <ContactForm/>
    </section>
  );
};

export default Contact;
