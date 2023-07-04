import React from 'react';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Input, Label, Button } from './ContactForm.module';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContactsState } from 'redux/selectors';


export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactsState);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const newContact = (name, number) => {
    return {
      id: nanoid(),
      name,
      number,
    }
  };

  const onInputChange = e => {
		const { value } = e.currentTarget;
		e.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  
  const onFormSubmit = e => {
    e.preventDefault();

    const currentName = name;
    
    if (contacts.some(({ name }) => name === currentName)) {
      return alert(`You already have ${(currentName).toUpperCase()} in your contacts! Please try to change the name of the contact!`);
    }
		

    const contact = newContact(name, number);
		dispatch(addContact(contact))
    reset();

  };

  // const onFormSubmit = e => {
  //   e.preventDefault();
     
  //   const form = e.target;
  //   const currentName = e.target.elements.name.value;

  //   const newContact = {
  //     id: nanoid(),
  //     name: e.target.elements.name.value,
  //     number: e.target.elements.number.value,
  //   };

  //   if (contacts.some(({ name }) => name === currentName)) {
  //     return alert(`You already have ${(currentName).toUpperCase()} in your contacts! Please try to change the name of the contact!`);
  //   }
    
  //   dispatch(addContact(newContact));

  //   form.reset();
  // };


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
          value={name}
          onChange={onInputChange}
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
          value={number}
          onChange={onInputChange}
          placeholder="Enter number..."
        />
      </Label>
      <Button
        type="submit">Add</Button>
    </Form>
  );
};
