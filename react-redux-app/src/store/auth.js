import { createSlice } from '@reduxjs/toolkit';

const authInitialState = { isAuthanticated: false };
export const authSlice = createSlice({
   name: 'auth',
   initialState: authInitialState,
   reducers: {
      login(state) {
         state.isAuthanticated = true;
      },
      logout(state) {
         state.isAuthanticated = false;
      },
   },
});

export const authAction = authSlice.actions;

