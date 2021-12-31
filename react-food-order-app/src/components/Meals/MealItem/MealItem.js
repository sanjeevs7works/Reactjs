import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
   const ctx = useContext(CartContext);
   const price = `$${props.price.toFixed(2)}`;
   const addItemToCartHandler = (amount) => {
      ctx.addItem({
         id: props.id,
         name: props.name,
         price: props.price,
         amount: amount,
      });
   };

   return (
      <li className={classes.meal} key={props.id}>
         <div>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
         </div>
         <div>
            <MealItemForm onAddToCart={addItemToCartHandler} id={props.id} />
         </div>
      </li>
   );
};
export default MealItem;
