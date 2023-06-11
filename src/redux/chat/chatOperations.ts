import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// axios.defaults.baseURL = '';

const getAllMessage = createAsyncThunk(
  'chat/allMessage',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://647f23d7c246f166da902b44.mockapi.io/chat'
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const postMessage = createAsyncThunk(
  'chat/postMessage',
  async (credentials: object, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://647f23d7c246f166da902b44.mockapi.io/chat',
        credentials
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const editMessage = createAsyncThunk(
  'chat/editMessage',
  async (credentials: object, { rejectWithValue }) => {
    const dre = Object.values(credentials)[0];
    try {
      const { data } = await axios.put(
        `https://647f23d7c246f166da902b44.mockapi.io/chat/${dre}`,
        credentials
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const getIdEdMessage = createAsyncThunk(
  'chat/getIdEdMessage',
  async (credentials: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://647f23d7c246f166da902b44.mockapi.io/chat/${credentials}`
      );
      return data.message;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const deleteMessage = createAsyncThunk(
  'chat/editMessage',
  async (credentials: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `https://647f23d7c246f166da902b44.mockapi.io/chat/${credentials}`
      );
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
const supportWriting = async (credentials: object) => {
  try {
    const { data } = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      credentials
    );
    console.log(data);
    return data;
  } catch (error: any) {
    return console.log(error);
  }
};

const chatOperations: any = {
  getAllMessage,
  getIdEdMessage,
  postMessage,
  editMessage,
  deleteMessage,
  supportWriting,
};

export default chatOperations;
