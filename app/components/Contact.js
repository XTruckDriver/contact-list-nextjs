'use client';

//import { useRouter } from 'next/navigation';

function Contact({ contact }) {

console.log(`<Contact /> => contact: ${contact}`);

    return (
      <>
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
      </>

    );

}
export default Contact