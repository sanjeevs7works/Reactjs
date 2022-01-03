import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
const Cart = (props) => {
   const ctx = useContext(CartContext);

   const cartItemRemoveHanlder = (id) => {
      ctx.removeItem(id);
   };

   const cartItemAddHandler = (item) => {
      ctx.addItem({ ...item, amount: 1 });
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

   return (
      <Modal onHide={props.onCartHide}>
         {cartList}
         <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
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
