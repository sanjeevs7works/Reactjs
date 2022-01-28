import { createSlice } from '@reduxjs/toolkit';
const initialUIState = { isVisible: false };

export const uiSlice = createSlice({
   name: 'ui',
   initialState: initialUIState,
   reducers: {
      show(state) {
         state.isVisible = !state.isVisible;
      },
   },
});

export const viewAction = uiSlice.actions;

