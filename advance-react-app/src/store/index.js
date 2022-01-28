import { configureStore } from '@reduxjs/toolkit';

import { uiSlice}  from '../store/ui-slice.js';
import cartSlice from './cart-slice';

const store = configureStore({
   reducer: {
      visibleReducer: uiSlice.reducer,
      cartReducer:cartSlice.reducer
      
   },
});
export default store; 
