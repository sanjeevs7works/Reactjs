import { useReducer } from 'react';
import CartContext from './cart-context';

const initialState = {
   items: [],
   totalAmount: 0,
};
const cartReducer = (state, action) => {
   let updatedItems;
   //add item to cart handler
   if (action.type === 'ADD') {
      //update total amount of cart
      updatedItems = state.items.concat(action.item);
      const updatedTotalAmount =
         state.totalAmount + action.item.price * action.item.amount;
      //check whether item is already exist in cart or not
      const exitingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.item.id
      );
      //existing item
      const exitingCartItem = state.items[exitingCartItemIndex];
      //if item already exist in cart
      if (exitingCartItem) {
         //update amount in exiting item
         const updatedItem = {
            ...exitingCartItem,
            amount: exitingCartItem.amount + action.item.amount,
         };
         updatedItems = [...state.items];
         //update item in cart
         updatedItems[exitingCartItemIndex] = updatedItem;
      }

      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount,
      };
   }
   //remove item from cart (handler function)
   if (action.type === 'REMOVE') {
      //check index whether item already exist of not
      const exitingCartItemIndex = state.items.findIndex(
         (item) => item.id === action.id
      );
      const exitingCartItem = state.items[exitingCartItemIndex];
      //if cart having only one similar item
      if (exitingCartItem.amount === 1) {
         updatedItems = state.items.filter((item) => item.id !== action.id);
      }
      //if cart having more than similar item
      else {
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
