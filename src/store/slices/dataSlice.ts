// dataSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DataState {
  counter: number;
  // Add other data...
}

const initialState: DataState = {
  counter: 0,
  // other data...
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // other data-related reducers...
  },
});

export const { increment, decrement } = dataSlice.actions;
export default dataSlice.reducer;
