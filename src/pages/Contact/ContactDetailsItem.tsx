import React from 'react';
import { IOffice } from '../../context/DataContext';
// @ts-ignore
import ArrowIcon from '../../assets/icons/arrow-icon.svg?react';

const ContactDetailsItem = ({ data }: { data: IOffice }) => {
  return (
    <div className="text-ColorDarkGrey">
      <h3 className="text-xl mb-6">{data.name}</h3>
      <ul className="flex flex-col gap-2 font-light text-xl mb-12 sm:mb-6">
        <li>Mail: {data.mail}</li>
        <li>Address: {data.address}</li>
        <li>Phone: {data.phone}</li>
      </ul>
      <a
        href="#"
        onClick={(event) => event.preventDefault()}
        className="flex items-center gap-4 font-bold text-ColorDark text-xl hover:underline"
      >
        View on Map
        <ArrowIcon className="brightness-0" />
      </a>
    </div>
  );
};

export default ContactDetailsItem;
