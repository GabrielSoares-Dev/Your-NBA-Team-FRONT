import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IConfigurationsState } from './types.store';

const initialState: IConfigurationsState = {
  loading: 'IDLE',
  payload: {
    isOpenDrawerMobileNavBar: false,
  },
};
const store = createSlice({
  initialState,
  name: 'configurations',
  reducers: {
    setDrawer: (state, action: PayloadAction<boolean>) => {
      state.payload.isOpenDrawerMobileNavBar = action.payload;
    },
  },
});

export const { setDrawer } = store.actions;
export default store.reducer;
