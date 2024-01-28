import React from 'react';
// @ts-ignore
import ArrowIcon from '../../assets/icons/arrow-icon.svg?react';

const ContactForm = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className="flex gap-24 mb-48 lg:gap-14 md:flex-col sm:mb-24 2sm:px-4">
      <h2 className="font-bold text-6xl max-w-60 2sm:text-5xl">Conntect with us</h2>
      <div className="w-full">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col text-ColorDark text-2xl"
        >
          <label hidden htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Name"
            className="border-b-2 border-ColorDark pb-4 px-4 mb-8 
            focus:outline-none"
          />
          <label hidden htmlFor="email">
            Name
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="border-b-2 border-ColorDark pb-4 px-4 mb-8 
            focus:outline-none"
          />
          <label hidden htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols={20}
            rows={4}
            placeholder="Message"
            className="resize-none border-b-2 border-ColorDark pb-4 px-4 
            focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="text-xl text-ColorWhite bg-ColorDark max-w-max ml-auto
            px-8 py-6 hover:bg-ColorDarkGrey transition-colors duration-300"
          >
            <ArrowIcon />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
