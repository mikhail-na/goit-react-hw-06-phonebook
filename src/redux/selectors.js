export const getContactsState = state => {
  const normalized = state.filter.toLowerCase().trim();
  
  return state.contacts.items.filter(item =>
    item.name.toLowerCase().trim().includes(normalized)
  );
};
export const getFilteredContacts = state => state.filters;
