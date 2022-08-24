import React from "react";

const ContactForm = () => {
  return (
    <div>
      <div className="contact-base">
        <div className="contact-base-content">
          <h2>Formularz kontaktowy</h2>
          <input type="text" placeholder="Imię" />
          <input type="text" placeholder="Nazwisko" />
          <input type="Email" placeholder="Email" />
          <input type="tel" placeholder="Telefon" />
          <button>Skontaktuj się</button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
