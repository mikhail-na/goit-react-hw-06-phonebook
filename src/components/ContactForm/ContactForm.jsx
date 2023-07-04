import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Input, Label, Button } from './ContactForm.module';

import { addContact } from 'redux/contactsSlice';
import { getContactsState } from 'redux/selectors';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsState);

  const onFormSubmit = e => {
    e.preventDefault();
     
    const form = e.target;
    const currentName = e.target.elements.name.value;

    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };

    if (contacts.some(({ name }) => name === currentName)) {
      return alert(`You already have ${(currentName).toUpperCase()} in your contacts! Please try to change the name of the contact!`);
    }
    
    dispatch(addContact(newContact));

    form.reset();
  };


  return (
    <Form onSubmit={onFormSubmit} autoComplete="off">
      <Label>
        NAME
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contacts.name}
          placeholder='Enter Name...'      
        />
      </Label>
      <Label>
        NUMBER
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contacts.number}
          placeholder="Enter number..."
        />
      </Label>
      <Button
        type="submit">Add</Button>
    </Form>
  );
};
