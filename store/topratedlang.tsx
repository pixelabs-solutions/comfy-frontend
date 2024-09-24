import { createSlice } from '@reduxjs/toolkit';

export const TopratedLang = createSlice({
  name: 'TopRatedLang',
  initialState: [], // Initial state as an empty array
  reducers: {
    SavingValuePair: (state, action) => {
      return action.payload;
    },
  },
});

export const { SavingValuePair } = TopratedLang.actions;
export default TopratedLang.reducer;
