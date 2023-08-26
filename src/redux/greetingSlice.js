import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  message: 'Welcome!',
  status: 'idle',
};

export const fetchMessage = createAsyncThunk(
  'greeting',
  async () => {
    const response = await fetch('http://localhost:3000/api/greeting');
    const data = await response.json();
    return data;
  },
);

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMessage.fulfilled, (state, action) => {
      state.message = action.payload;
      state.status = 'success';
    });
  },
});

export default greetingSlice.reducer;
