import React, { useContext } from 'react';
import ContactForm from '../components/ContactForm';
import { ThemeContext } from '../context/ThemeContext';

const ContactPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className='form-container' id='contact'>
      <h2 className={`form-container__title ${theme}`}>Contact Me</h2>
      <p className={`form-container__subtitle ${theme}`}>
        Do you want to collaborate? Message me below and I'll get back to you
        ASAP!
      </p>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
