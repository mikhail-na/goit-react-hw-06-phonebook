import { Layout } from './Layout/Layout';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactFilter } from './ContactFilter/ContactFilter';
import { ContactsList } from './ContactsList/ContactsList';

export const App = () => {

  return (
    <>
      <Layout title="Phonebook">
        <ContactForm />
      </Layout>
      <Layout title="Contacts">
        <ContactFilter />
        <ContactsList/>
      </Layout>
    </>
  );
};
