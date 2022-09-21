import { createSlice } from '@reduxjs/toolkit';
import { ITestState } from './types.store';

const initialState: ITestState = {
  loading: 'IDLE',
  payload: {
    test: 'gay',
  },
};
const store = createSlice({
  initialState,
  name: 'test',
  reducers: {},
});

export default store.reducer;
