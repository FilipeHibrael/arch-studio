import { IOffice } from '../../context/DataContext';
import ContactDetailsItem from './ContactDetailsItem';

const ContactDetails = ({ data }: { data: IOffice[] }) => {
  return (
    <div className="flex justify-between">
      <h2 className="font-bold text-6xl max-w-56">Contact Details</h2>
      <div className="flex gap-32">
        {data.map((item, index) => (
          <ContactDetailsItem key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ContactDetails;
