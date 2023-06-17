import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  idAdmin: false,
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    resetData: () => initialState,
  },
});

export const { addUser, resetData } = userSlice.actions;

export default userSlice.reducer;
