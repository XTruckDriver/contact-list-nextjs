'use client';
import React, { useState } from 'react';


function Form({ handleAddContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [phone, setPhone] = useState("");

    
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const randomId = Math.round(Math.random() * 100000000);
    const newContact =  {
                          id: randomId,
                          name: name,
                          email: email,
                          imageURL: imageURL,
                          phone: phone,                  
    };


    console.log(`newContact = ${newContact}`);
    // router.push('/contacts');

    handleAddContact(newContact);
    
    //addContact(newContact);
    setName('');
    setEmail('');
    setImageURL('');
    setPhone('');

  

  };

    return (
      <>
        <h2>Add New Contact</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='inputName' className='form-label'>Name</label>
            <input type='text' className='form-control' id='inputName' name='name' onChange={(e) => setName(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='inputEmail' className='form-label'>Email</label>
            <input type='email' className='form-control' id='inputEmail' name='email' onChange={(e) => setEmail(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='inputImageURL' className='form-label'>Image URL</label>
            <input type='text' className='form-control' id='inputImageURL' name='imageURL' onChange={(e) => setImageURL(e.target.value)}></input>
          </div>
          <div>
            <label htmlFor='inputPhone' className='form-label'>Phone</label>
            <input type='text' className='form-control' id='inputPhone' name='phone' onChange={(e) => setPhone(e.target.value)}></input>
          </div>
      
          <button type="submit" className='btn btn-primary'>Add Contact</button>
        </form>
      </>
    );

}
export default Form