import { createSelector } from '@reduxjs/toolkit';

export const selectedContacts = (state) => state.contacts.items;
export const selectedLoading = (state) => state.contacts.loading;
export const selectedError = (state) => state.contacts.error;
export const selectedNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = createSelector(
  [selectedContacts, selectedNameFilter],
  (contacts, filter) => {
    if (!Array.isArray(contacts)) {
      return [];
    }

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
