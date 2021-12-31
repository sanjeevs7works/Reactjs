import { useReducer } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';
import CartContext from './cart-context';

const initialState = {
   items: [],
   totalAmount: 0,
};
const cartReducer = (state, action) => {
   let updatedItems;
   if (action.type === 'ADD') {
      updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
         state.totalAmount + action.item.price * action.item.amount;
      const exitingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.item.id
      );
      const exitingCartItem = state.items[exitingCartItemIndex];
      if (exitingCartItem) {
         const updatedItem = {
            ...exitingCartItem,
            amount: exitingCartItem.amount + action.item.amount,
         };
         updatedItems = [...state.items];
         updatedItems[exitingCartItemIndex] = updatedItem;
      }
      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount,
      };
   }
   if (action.type === 'REMOVE') {
      const exitingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.id
      );
      const exitingCartItem = state.items[exitingCartItemIndex];
      if (exitingCartItem.amount === 1) {
         updatedItems = state.items.filter((item) => item.id !== action.id);
      } else {
         const updatedItem = {
            ...exitingCartItem,
            amount: exitingCartItem.amount - 1,
         };
         updatedItems = [...state.items];
         updatedItems[exitingCartItemIndex] = updatedItem;
      }
      const updatedTotalAmount = state.totalAmount - exitingCartItem.price;
      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount,
      };
   }
   return initialState;
};

const CartProvider = (props) => {
   const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

   //Add Item to cart handler
   const addItemToCartHandler = (item) => {
      dispatchCart({ type: 'ADD', item: item });
   };

   //remove item from cart
   const removeItemFromCartHandler = (id) => {
      dispatchCart({ type: 'REMOVE', id: id });
   };

   //initialise cart context value
   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
   };
   return (
      <CartContext.Provider value={cartContext}>
         {props.children}
      </CartContext.Provider>
   );
};
export default CartProvider;
