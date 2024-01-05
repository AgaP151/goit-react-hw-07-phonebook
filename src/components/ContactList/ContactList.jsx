import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Notiflix from 'notiflix';
import { notifySettings } from '../../utils/notifySettings';

import { List } from './ContactList.styled';
import { ContactItem } from './ContactItem';
import { fetchContacts, deleteContact } from '../../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filterContacts = () => {
    const query = filter.toLocaleLowerCase();

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(query)
    );

    if (query && !filteredContacts.length) {
      Notiflix.Notify.warning(
        'No contacts matching your request',
        notifySettings
      );
    }
    return filteredContacts;
  };

  return (
    <List>
      {filterContacts().map(contact => {
        return (
          <ContactItem
            id={contact.id}
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDeleteBtnClick={() => dispatch(deleteContact(contact.id))}
          />
        );
      })}
    </List>
  );
};