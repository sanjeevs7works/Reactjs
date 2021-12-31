import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
const MealItemForm = (props) => {
   const amountInputRef = useRef();
   const [amountIsValid, setAmountIsValid] = useState(true);
   const addSubmitHandler = (event) => {
      event.preventDefault();
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;
      if (
         enteredAmount.trim().length === '0' ||
         enteredAmountNumber > 5 ||
         enteredAmountNumber < 1
      ) {
         setAmountIsValid(false);
         return;
      }

      props.onAddToCart(enteredAmountNumber);
   };
   return (
      <form className={classes.form} onSubmit={addSubmitHandler}>
         <Input
            ref={amountInputRef}
            label='Amount'
            input={{
               id: 'amount_' + props.id,
               type: 'number',
               step: 1,
               defaultValue: '1',
            }}
         />

         <button type='submit'>+Add</button>
         {!amountIsValid && <p>entered amount should be 1-5</p>}
      </form>
   );
};
export default MealItemForm;
