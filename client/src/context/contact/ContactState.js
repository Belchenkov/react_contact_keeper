import React, { useReducer } from 'react';
import uuid from 'uuid';

import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT
} from '../types';

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: 'Jill Johnson',
                email: 'johnson@gmail.com',
                phone: '111-111-1111',
                type: 'personal',
            },
            {
                id: 2,
                name: 'Sara Watson',
                email: 'swatson@gmail.com',
                phone: '222-222-2222',
                type: 'personal',
            },
            {
                id: 3,
                name: 'Harry White',
                email: 'hwhite@gmail.com',
                phone: '333-333-3333',
                type: 'professional',
            }
        ]
    };

    const [ state, dispatch ] = useReducer(contactReducer, initialState);

    // Add Contact

    // Delete Contact

    // Set Current Contact

    // Clear Current Contact

    // Update Contact

    // Filter Contacts

    // Clear Filter

    return (
        <ContactContext.Provider
            value = {{
              contacts: state.contacts
            }}>
            { props.children }
        </ContactContext.Provider>
    );
};

export default ContactState;