import React, { useState, useContext } from 'react';
// import PropTypes from 'prop-types';

import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
    const contactContext = useContext(ContactContext);

    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        type: 'personal'
    });

    const { name, email, phone, type } = contact;

    const onChange = e => setContact({ ...contact, [e.target.name]: e.target.value });

    const onSubmit = e => {
      e.preventDefault();

      // Add New Contact
      contactContext.addContact(contact);

      // Clear Form
      setContact({
          name: '',
          email: '',
          phone: '',
          type: 'personal'
      });
    };

    return (
        <form onSubmit={onSubmit}>
            <h2 className="text-primary">Add Contact</h2>
            <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={onChange}
            />
            <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={onChange}
            />
            <input
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={onChange}
            />
            <h5>Contact Type</h5>
            <input
                type="radio"
                name="type"
                value="personal"
                onChange={onChange}
                checked={type === 'personal'}
            /> Personal{' '}
            <input
                type="radio"
                name="type"
                value="professional"
                onChange={onChange}
                checked={type === 'professional'}
            /> Professional
            <div>
                <input type="submit" value="Add Contact" className="btn btn-primary"/>
            </div>
        </form>
    );
};

/*
ContactItem.propTypes = {
    contact: PropTypes.object.isRequired
};
*/

export default ContactForm;