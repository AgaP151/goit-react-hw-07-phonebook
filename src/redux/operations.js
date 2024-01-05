import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6597d194668d248edf2376fc.mockapi.io';

export const fetchContacts = createAsyncThunk(
    'contacts/fetchContacts',
        async (_, thunkApi) => {
        try {
            const { data } = await axios.get('/contacts');
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
        async (contact, thunkApi) => {
            try {
                const { data } = await axios.post('/contacts', contact);
                return data;
            } catch (error) {
                return thunkApi.rejectWithValue(error.message);
            }
        }
);
export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (id, thunkAPI) => {
      try {
        const { data } = await axios.delete(`/contacts/${id}`);
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );