import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const ContactForm = () => {
  const { theme } = useContext(ThemeContext);
  const [recaptchaChecked, setRecaptchaChecked] = useState(false);
  const [openCaptchaAlert, setOpenCaptchaAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);

  const showCaptchaAlert = () => {
    setOpenCaptchaAlert(true);
  };
  const showSuccessAlert = () => {
    setOpenSuccessAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenCaptchaAlert(false);
  };
  const handleSuccessClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSuccessAlert(false);
  };

  const showLabel = (e) => {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    if (e.target.name === 'user_name') {
      name.classList.add('focus');
    }
    if (e.target.name === 'user_email') {
      email.classList.add('focus');
    }
    if (e.target.name === 'message') {
      message.classList.add('focus');
    }
  };
  const hideLabel = () => {
    const labels = document.querySelectorAll('label');
    labels.forEach((label) => {
      label.classList.remove('focus');
    });
  };

  function sendEmail(e) {
    if (recaptchaChecked) {
      e.preventDefault();
      showSuccessAlert();

      emailjs
        .sendForm(
          'service_tev9jzv',
          'template_4kl84vq',
          e.target,
          'user_BaAAqPGltN6DwLfEHQAP1'
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );

      e.target.reset();
    } else {
      e.preventDefault();
      showCaptchaAlert();
    }
  }

  function onChange(value) {
    console.log('Captcha value:', value);
    setRecaptchaChecked(true);
  }

  // !messageSent ? (
  return (
    <form className='contact-form' onSubmit={sendEmail}>
      <div className='contact-form__group'>
        <label className={`contact-form__label ${theme}`} id='name'>
          Name
        </label>
        <input
          className={`contact-form__control ${theme}`}
          placeholder='Jane Doe'
          type='text'
          onFocus={showLabel}
          onBlur={hideLabel}
          name='user_name'
          required
        />
      </div>
      <div className='contact-form__group'>
        <label className={`contact-form__label ${theme}`} id='email'>
          Email
        </label>
        <input
          className={`contact-form__control ${theme}`}
          placeholder='jane@doe.com'
          type='email'
          name='user_email'
          onFocus={showLabel}
          onBlur={hideLabel}
          required
        />
      </div>
      <div className='contact-form__group'>
        <label className={`contact-form__label ${theme}`} id='message'>
          Message
        </label>
        <textarea
          className={`contact-form__control ${theme}`}
          rows='5'
          cols='50'
          placeholder='Enter Message...'
          name='message'
          onFocus={showLabel}
          onBlur={hideLabel}
          required
        />
      </div>
      <ReCAPTCHA
        className='g-recaptcha'
        sitekey='6LfrD1MaAAAAACjAeO8BuoYsURo4eGJhKGqvayCg'
        onChange={onChange}
        theme='dark'
      />
      <Snackbar
        open={openCaptchaAlert}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          style={{ fontSize: '1.2rem' }}
          onClose={handleClose}
          severity='warning'
        >
          Please complete the captcha!
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccessAlert}
        autoHideDuration={6000}
        onClose={handleSuccessClose}
      >
        <Alert
          style={{ fontSize: '1.2rem' }}
          onClose={handleSuccessClose}
          severity='success'
        >
          Message Sent! Talk to you soon! 😁
        </Alert>
      </Snackbar>
      <button className='cta-btn cta-btn--contact' id='sendBtn' type='submit'>
        SEND <i className='far fa-paper-plane'></i>
      </button>
    </form>
  );
};

export default ContactForm;
