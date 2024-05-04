'use client';
import { useState } from 'react';
import Contacts from './Contacts';
import Form from './Form.js';
import { initialList } from '../data/initialList';
import { useRouter } from 'next/navigation';

function ContactListApp() {

    const [contactList, setContactList] = useState(initialList);
    const router = useRouter();

    const handleAddContact = (newContact) => {
      setContactList([
        ...contactList, newContact
      ]
      );
      
       router.push('/contacts');
    }

    return (
      <>
        <h1>Contact List App</h1>
        <Contacts contactList={contactList} />
        <Form handleAddContact = {handleAddContact}/>
      </>
    );

}
export default ContactListApp