import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/selectors';

import { setFilterContacts } from 'redux/filterSlice';
import { Label, Input } from './ContactFilter.module';


export const ContactFilter = () => {
  const filter = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const label = 'Find contacts by name';


  //  const handleChangeFilter = ({ currentTarget: { value } }) => {
  //   dispatch(setFilterContacts(value.toLowerCase().trim()));
  // };

  return (
    <Label>
     {label.toUpperCase()}
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name..."
        value={filter}
        onChange={(e)=>dispatch(setFilterContacts(e.currentTarget.value))}
      />
    </Label>
  );
};

