import React from 'react';
import emailjs from '@emailjs/browser';
import './css/Contact.css';

const Contact = ({ confirmation, setConfirmation }) => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm('gmail', 'template_33n0yiq', e.target, 'RnG8-IShnu5RbTCZN')
      .then(
        result => {
          setConfirmation('Message Sent!');
        },
        error => {
          setConfirmation(
            'There was an issue. Please email bqcritken@gmail.com directly!'
          );
        }
      );
    e.target.reset();
  }

  return (
    <main className="Contact">
      <h2>Contact Me</h2>
      <p>
        Below are links to examples of my work and a way to contact me directly.
        I hope to hear from you soon!
      </p>
      <div className="buttons">
        <a href="https://github.com/kgrove002" target="_blank" rel="noreferrer">
          <button type="button" className="btn btn-secondary">
            GitHub
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-grove-60010b194/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="btn btn-secondary">
            LinkedIn
          </button>
        </a>
      </div>

      <h2
        style={
          confirmation === 'Message Sent!'
            ? { color: 'green' }
            : { color: 'red' }
        }
      >
        {confirmation}
      </h2>

      <form className="contactForm" onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input name="name" type="text" required />
        <label htmlFor="email">Email:</label>
        <input name="email" type="text" required />
        <label htmlFor="subject">Reason For Contact:</label>
        <input name="subject" type="text" required />
        <label htmlFor="message">Message</label>
        <textarea name="message" required />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Contact;
