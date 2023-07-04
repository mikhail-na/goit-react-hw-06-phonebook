import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { List, ContactItem, ContactName, ContactNumber, Button} from './ContactsList.module';

import { removeContact } from 'redux/contactsSlice';
import { getContactsState } from 'redux/selectors';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsState);

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
          return (
            <ContactItem key={id}>
              <ContactName>
                {name}: <ContactNumber>{number}</ContactNumber>
              </ContactName>
              <Button
                type="button"
                onClick={() => dispatch(removeContact(id))}
              >
                x
              </Button>
            </ContactItem>
          );
        })}
    </List>
  );
};


ContactsList.propTypes = {
  visibleContacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired
  )
};
