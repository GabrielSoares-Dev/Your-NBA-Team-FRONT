import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { start } from 'repl';
import { IAuthState } from './types.store';

const initialState: IAuthState = {
  loading: 'IDLE',
  payload: {
    token: 'sun',
  },
};
const store = createSlice({
  initialState,
  name: 'auth',
  reducers: {
    setSun: (state, action: PayloadAction<string>) => {
      state.payload.token = action.payload;
    },
  },
});

export const { setSun } = store.actions;
export default store.reducer;
