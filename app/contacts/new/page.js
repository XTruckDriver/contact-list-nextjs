'use client'
import React from 'react';
import Form from '../../components/Form.js';
import { ContactListAPI } from '@/app/data/ContactListAPI.js';


export default function New() {

  return (
    <main>
      <Form addContact={ContactListAPI.addContact} />
    </main>
  );
}