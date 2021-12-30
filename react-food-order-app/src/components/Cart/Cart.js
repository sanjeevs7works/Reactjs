import Modal from '../UI/Modal';
import classes from './Cart.module.css';
const Cart = (props) => {
   const cartList = (
      <ul className={classes['cart-items']}>
         {[{ id: 'm1', name: 'Shushi', amount: 2, price: 25 }].map((item) => (
            <li>{item.name}</li>
         ))}
      </ul>
   );

   return (
      <Modal onHide={props.onCartHide}>
         {cartList}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>$32</span>
         </div>
         <div className={classes.actions}>
            <button
               className={classes['button--alt']}
               onClick={props.onCartHide}
            >
               Cancel
            </button>
            <button className={classes.button}>Order</button>
         </div>
      </Modal>
   );
};

export default Cart;
