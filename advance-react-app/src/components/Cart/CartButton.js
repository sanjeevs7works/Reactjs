import { useDispatch, useSelector } from 'react-redux';
import { viewAction } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
   const quantity = useSelector((state) => state.cartReducer.totalQuantity);

   const dispatch = useDispatch();
   const toggleHandler = () => {
      dispatch(viewAction.show());
   };
   return (
      <button className={classes.button} onClick={toggleHandler}>
         <span>My Cart</span>
         <span className={classes.badge}>{quantity}</span>
      </button>
   );
};

export default CartButton;
