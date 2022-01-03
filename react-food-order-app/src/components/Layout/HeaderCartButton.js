import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
   const [isHighlighted, setIsHighlightd] = useState(false);
   const cartCtx = useContext(CartContext);
   const { items } = cartCtx;
   const numberOfCartItem = items.reduce((curNumber, item) => {
      return curNumber + item.amount;
   }, 0);

   //
   useEffect(() => {
      if (items.length === 0) {
         return;
      }
      setIsHighlightd(true);
      const timer = setTimeout(() => {
         setIsHighlightd(false);
      }, 300);
      return () => {
         clearTimeout(timer);
      };
   }, [items]);

   const style = `${classes.button} ${isHighlighted ? classes.bump : ''}`;
   return (
      <button className={style} onClick={props.onShow}>
         <span className={classes.icon}>
            <CartIcon />
         </span>
         <span>YourCart</span>
         <span className={classes.badge}>{numberOfCartItem}</span>
      </button>
   );
};

export default HeaderCartButton;
