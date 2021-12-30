import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
   const cartCtx = useContext(CartContext);
   const numberOfCartItem = cartCtx.items.length;
   return (
      <button className={classes.button} onClick={props.onShow}>
         <span className={classes.icon}>
            <CartIcon />
         </span>
         <span>YourCart</span>
         <span className={classes.badge}>{numberOfCartItem}</span>
      </button>
   );
};

export default HeaderCartButton;
