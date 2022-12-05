import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading } from 'redux/contacts/selectors';
import Phonebook from 'components/Phonebook/Phonebook';
import Filter from 'components/Filter/Filter';
import Contacts from 'components/Contacts/Contacts';

export default function ContactsList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
      <Phonebook />
      <Filter />
      <Contacts />
    </>
  );
}
