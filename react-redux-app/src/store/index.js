import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from '../store/auth.js';
import { counterSlice } from '../store/counter';
const store = configureStore({
   reducer: {
      counter: counterSlice.reducer,
      auth:authSlice.reducer
  }
});

export default store;
