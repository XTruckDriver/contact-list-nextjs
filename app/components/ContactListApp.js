'use client';
import React from 'react';
import List from './List.js';
import Form from './Form.js';
import Link from 'next/link';
import { ContactListAPI } from '../data/ContactListAPI.js';


function ContactListApp() {
// get contacts
const contacts = ContactListAPI.contacts;

console.log(contacts);
    return (
      <>
        <h2>All Contacts</h2>
        <Link href="/contacts/new">Add New</Link>
        <p>Search Bar will be here</p>
        <List contacts={contacts}/>
        <Form  addContact={ContactListAPI.addContact}/>
        
      </>
    );
}
export default ContactListApp
