import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import Checkout from './Checkout';
const Cart = (props) => {
   const ctx = useContext(CartContext);
   const [isCheckout, setIsCheckout] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);

   const cartItemRemoveHanlder = (id) => {
      ctx.removeItem(id);
   };

   const cartItemAddHandler = (item) => {
      ctx.addItem({ ...item, amount: 1 });
   };
   const orderClickHandler = () => {
      setIsCheckout(true);
   };
   const submitFormHandler = async (usedata) => {
      try {
         const res = await fetch(
            'https://react-food-app-3433b-default-rtdb.asia-southeast1.firebasedatabase.app/order.json',
            {
               method: 'POST',
               body: JSON.stringify({
                  userDetail: usedata,
                  itemDetails: ctx.items,
               }),
            }
         );
         if (!res.ok) {
            throw new Error('something went wrong');
         }
         setIsSubmitted(true);
      } catch (error) {
         return <p className={classes['error-text']}>{error.message}</p>;
      }
   };
   const totalAmount = `$${ctx.totalAmount.toFixed(2)}`;
   const cartList = (
      <ul className={classes['cart-items']}>
         {ctx.items.map((item) => (
            <CartItem
               key={item.id}
               name={item.name}
               price={item.price}
               amount={item.amount}
               onRemove={cartItemRemoveHanlder.bind(null, item.id)}
               onAdd={cartItemAddHandler.bind(null, item)}
            />
         ))}
      </ul>
   );
   const cartActionButton = (
      <div className={classes.actions}>
         <button className={classes['button--alt']} onClick={props.onCartHide}>
            Cancel
         </button>
         <button className={classes.button} onClick={orderClickHandler}>
            Order
         </button>
      </div>
   );
   const orderContent = (
      <React.Fragment>
         {cartList}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
         </div>
         {isCheckout && (
            <Checkout
               onCancel={props.onCartHide}
               onSubmit={submitFormHandler}
            />
         )}
         {!isCheckout && cartActionButton}
      </React.Fragment>
   );
   const feedBackContent = (
      <>
         <p>Thankyou for choosing ...</p>
         <button onClick={props.onCartHide}>Cancel</button>
      </>
   );
   return (
      <Modal onHide={props.onCartHide}>
         {!isSubmitted && orderContent}
         {isSubmitted && feedBackContent}
      </Modal>
   );
};

export default Cart;
