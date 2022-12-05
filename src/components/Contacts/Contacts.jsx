import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectContacts,
  selectNameFilter,
  selectIsLoading,
  selectError,
} from 'redux/contacts/selectors';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { ContactBlock, ListOfContacts } from './Contacts.styled';

export const getVisibleContacts = (contacts, filteredName) => {
  if (!filteredName) {
    return contacts;
  }
  const normalizedFilter = filteredName?.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return filteredContacts;
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts) ?? [];
  const filteredName = useSelector(selectNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filteredName);

  console.log('contacts', visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = item => dispatch(deleteContact(item.id));

  return (
    <ContactBlock>
      <div style={{ height: '10px' }}>
        {isLoading && !error && <b>Request in progress...</b>}
      </div>
      <ListOfContacts>
        {contacts.length > 0 &&
          visibleContacts.map(item => (
            <li key={item.id}>
              {item.name}: {item.number}
              <button type="button" onClick={() => handleDelete(item)}>
                Delete
              </button>
            </li>
          ))}
      </ListOfContacts>
    </ContactBlock>
  );
}
