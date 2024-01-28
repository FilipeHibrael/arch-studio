import { IOffice } from '../../context/DataContext';
import ContactDetailsItem from './ContactDetailsItem';

const ContactDetails = ({ data }: { data: IOffice[] }) => {
  return (
    <div className="flex justify-between gap-6 mb-48 md:flex-col sm:mb-24 2sm:px-4">
      <h2 className="font-bold text-6xl max-w-56 2sm:text-5xl 2sm:max-w-max">Contact Details</h2>
      <div className="flex gap-32 sm:flex-col sm:gap-14">
        {data.map((item, index) => (
          <ContactDetailsItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
