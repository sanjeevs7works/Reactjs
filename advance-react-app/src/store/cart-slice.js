import { createSlice } from '@reduxjs/toolkit';

const cartInitialItem = {
   items: [],
   totalQuantity: 0,
};

const cartSlice = createSlice({
   name: 'cart',
   initialState: cartInitialItem,
   reducers: {
      addItemToCartItem(state, action) {
         const newItem = action.payload;
         console.log(newItem);
         const exitingItem = state.items.find((item) => item.id === newItem.id);
         console.log(exitingItem);
         state.totalQuantity++;

         if (!exitingItem) {
            state.items.push({
               id: newItem.id,
               title: newItem.title,
               quantity: 1,
               price: newItem.price,
               totalPrice: newItem.price,
            });
         } else {
            exitingItem.quantity++;
            exitingItem.totalPrice = exitingItem.totalPrice + newItem.price;
         }
      },
      removeItemFromCart(state, action) {
         const id = action.payload;
         const exitingItem = state.items.find((item) => item.id === id);
         if (exitingItem.quantity === 1) {
            state.items = state.items.filter((item) => item.id !== id);
         } else {
            exitingItem.quantity--;
            exitingItem.totalPrice = exitingItem.totalPrice - exitingItem.price;
         }
      },
   },
});
export const cartAction = cartSlice.actions;
export default cartSlice;
