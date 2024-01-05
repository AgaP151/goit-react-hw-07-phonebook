import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';
import Notiflix from 'notiflix';
import { notifySettings } from '../utils/notifySettings';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
        Notiflix.Notify.success(
          `${payload.name} was successfully added to your contacts`,
            notifySettings
        );
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
        state.isLoading = false;
        state.error = null;
        Notiflix.Notify.info(
          `${payload.name} was successfully deleted from your contacts`,
          notifySettings
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});