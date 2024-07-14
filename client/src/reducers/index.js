import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: []
};

export const outputSlice = createSlice({
  name: 'outputState',
  initialState,
  reducers: {
    changeOutputState: (state , action) => {
      state.value = [...state.value , ...action.payload];
    }
  }
});


export const { changeOutputState } = outputSlice.actions;
export default outputSlice.reducer;
