'use client';
import React, { useState } from 'react';

function Contacts({ contactList }) {


    return (
      <>
        <h2>All Contacts</h2>
        <table className="table">
      <thead>
        <tr>
          <th scope="col">Profile Pic</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
          {contactList.map(contact =>(
            <tr key={contact.id}>
              <td>
                <img  src={contact.imageURL}
                      alt='Profile Pic'
                      height={50}
                      width={50} />
                
                
              </td>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>
          ))
          }
      </tbody>
    </table>
      </>
    );

}
export default Contacts
