'use client';
import React from 'react';
import Link from 'next/link';
import List from './components/List';
import { ContactListAPI } from './data/ContactListAPI';


export default function Home() {

  const contacts = ContactListAPI.contacts;

  return (
    <>
      <h1>Home Page - Contact List App</h1>
      <Link href="/contacts/new">Add New</Link>
      <p>Search Bar will be here</p>
      <List contacts={contacts} />
    </>
  )
}
