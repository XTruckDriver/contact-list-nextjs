'use client';
import Contact from './Contact.js';
import PropTypes from 'prop-types';

function List({ contacts }) {
console.log(`<List /> : contacts = ${contacts}`);
  return (
    <>
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
        
          {contacts.map((singleContact) => <Contact contact={singleContact} key={singleContact.id}/> )}
      </tbody>
    </table>
    </>
  );

}

List.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
};

export default List;
