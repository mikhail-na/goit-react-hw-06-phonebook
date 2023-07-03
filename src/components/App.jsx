import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';

import { useSelector } from 'react-redux';
import { getFilteredContacts, getContactsState } from 'redux/selectors';

import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {
  const filter = useSelector(getFilteredContacts);
  const contacts = useSelector(getContactsState);

  const isVisibleContacts = () => {
    if (filter) {
      const normalized = filter.toLowerCase();

      if (contacts.length !== 0) {
        return contacts.filter(contact =>
          contact.name.toLowerCase().includes(normalized)
        );
      }
    }
    return contacts;
  };

  return (
    <>
      <Layout title="Phonebook">
        <ContactForm />
      </Layout>
      <Layout title="Contacts">
        <ContactFilter />
        
        <ContactsList visibleContacts={isVisibleContacts()} />
      </Layout>
    </>
  );
};
