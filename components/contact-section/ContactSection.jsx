import React from 'react';

const ContactSection = () => {
  const fields = [
    'First Name',
    'Last Name',
    'Email Address',
    'Phone No.',
    'Restaurant Name',
    'Restaurant Name',
  ];

  return (
    <div>
      <p className='text-center font-semibold text-2xl sm:w-3/4 lg:w-1/2 m-auto'>
        Join us in helping you expand your business and help you take charge of
        your future!
      </p>

      <div className='mt-24 max-w-2xl m-auto lg:max-w-full bg-secondary rounded-xl flex flex-col lg:flex-row justify-between items-center shadow-lg text-slate-50 pt-8 pb-16'>
        <ContactText />
        <ContactForm fields={fields} />
      </div>
    </div>
  );
};

const ContactText = () => {
  return (
    <div className='lg:basis-1/2 flex flex-col lg:items-start items-center mt-14 px-4 lg:px-16'>
      <h2 className='text-4xl lg:text-5xl font-semibold tracking-wide leading-snug text-center lg:text-left'>
        Let&apos;s Get You Started!
      </h2>
      <p className='pt-8 text-md lg:text-lg leading-wide text-center lg:text-left lg:px-0 sm:px-8'>
        Still skeptical? Schedule a demo with us to get a glimpse of how{' '}
        <span className='font-bold'> Tuamify</span> can level up your
        restaurant.
      </p>
      <div className='mt-12 flex items-center'>
        <button
          type='button'
          className='social-btn btn-insta rounded-full mr-3 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300'
        >
          <img src='./insta-logo.svg' className='m-auto' width={24} />
        </button>
        <button
          type='button'
          className='social-btn btn-linkedin rounded-full mr-3 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300'
        >
          <img src='./linkedin-logo.svg' className='m-auto' width={26} />
        </button>
        <button
          type='button'
          className='social-btn btn-fb rounded-full mr-3 hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300'
        >
          <img src='fb-logo.svg' className='m-auto' width={18} />
        </button>
      </div>
    </div>
  );
};

const ContactForm = ({ fields }) => {
  return (
    <div className='w-full px-4 lg:basis-1/2 mt-20 lg:mt-14 border-l-0 lg:border-l-2 flex flex-col px-4 sm:px-8 md:px-32 lg:px-16'>
      <div className='ml-auto w-full'>
        <p className='text-center lg:text-right font-medium text-lg'>
          Provide Your Info
        </p>
        <form className='mt-8 w-full flex flex-col'>
          <InputRow rowFields={fields.slice(0, 2)} />
          <InputRow rowFields={fields.slice(2, 4)} />
          <InputRow rowFields={fields.slice(4, 6)} />

          <button
            type='button'
            className='lg:self-end justify-self-end contact-btn py-3 lg:mx-0 lg:px-8 rounded-lg hover:-translate-y-1 hover:scale-105 hover:drop-shadow-xl duration-300'
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

const InputRow = ({ rowFields }) => {
  return (
    <div className='flex justify-between pb-16 w-full'>
      {rowFields.map((field, index) => {
        let name = field.split(' ')[0].toLowerCase();
        return (
          <InputField
            key={index}
            type={name === 'email' ? 'email' : 'text'}
            name={name}
            placeholder={field}
            margin={index % 2 === 0 ? true : false}
          />
        );
      })}
    </div>
  );
};

const InputField = ({ type, placeholder, name, margin }) => {
  return (
    <input
      type={type}
      className={`outline-none bg-transparent border-b pb-3 pl-2 placeholder-slate-50 text-sm tracking-wide w-full ${
        margin ? 'mr-6 md:mr-12 lg:mr-12' : ''
      }`}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default ContactSection;
