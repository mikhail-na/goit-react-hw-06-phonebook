import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsList } from './ContactsList/ContactsList';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsState } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

export const App = () => {
  const dispatch = useDispatch();
	const contacts = useSelector(getContactsState);
	

  const addContactToContacts = data => {
    	const currentContact = contacts.find(({name}) =>
			name.toLowerCase().includes(data.name.toLowerCase().trim())
		);
    currentContact
      ? alert(`You already have ${(data.name).toUpperCase()} in your contacts! Please try to change the name of the contact!`)
      : dispatch(addContact(data))
		 
	};

  return (
    <>
      <Layout title="Phonebook">
        <ContactForm onSubmit={addContactToContacts}/>
      </Layout>
      <Layout title="Contacts">
        <ContactFilter />
        <ContactsList/>
      </Layout>
    </>
  );
};
