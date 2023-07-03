import { List, Item, Contact, Button} from './ContactsList.module';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import { getContactsState, getFilteredContacts } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
    const contacts = useSelector(getContactsState);
  const filter = useSelector(getFilteredContacts);
  
  const visibleContacts = [
    ...contacts.filter(contact => contact.name.toLowerCase().includes(filter)),
  ];
  
  return (
    <List>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <Item key={id}>
              <Contact>
                {name}: {number}
              </Contact>
              <Button
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                x
              </Button>
            </Item>
          );
        })}
    </List>
  );
};


ContactsList.propTypes = {
  visibleContacts: PropTypes.array,
};
