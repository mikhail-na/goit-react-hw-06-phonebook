import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Input, Label, Button } from './ContactForm.module';
import { addContact } from 'redux/contactsSlice';


export const ContactForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = e => {
    e.preventDefault();
     
    const form = e.target;

    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    };
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
          placeholder='Enter Name...'
          // value={contacts.name}
         
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
          placeholder="Enter number..."
          // value={contacts.number}
          
        />
      </Label>
      <Button
        type="submit"
      // disabled={!contacts.name || !contacts.number}
      >
        Add
      </Button>
    </Form>
  );
};
