'use client';
import { useState } from 'react';
import Contacts from './Contacts';
import Form from './Form.js';
import { initialList } from '../data/initialList';

function ContactListApp() {

    const [contactList, setContactList] = useState(initialList);

    return (
      <>
        <h1>Contact List App</h1>
        <Contacts contactList={contactList} />
        <Form />
      </>
    );

}
export default ContactListApp