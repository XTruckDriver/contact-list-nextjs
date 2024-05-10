import React from 'react';
import Link from 'next/link';
import ContactListApp from '../components/ContactListApp.js';
import List from '../components/List.js';
import { ContactListAPI } from '../data/ContactListAPI.js';

export default function Home() {
  
  const contacts = ContactListAPI.contacts;
  //get contacts here and pass down as props
  return (
    <main>
      <h2>All Contacts</h2>
      <Link href="/contacts/new">Add New</Link>
      <p>Search Bar will be here</p>
      <ContactListApp contacts={contacts}/>
    </main>
  )
}