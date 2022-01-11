import React, { useState } from 'react';
import useInput from '../../hooks/use-input';
import classes from './Checkout.module.css';

const Checkout = (props) => {
   const isEmpty = (value) => {
      return value.trim() !== '';
   };
   const pinIsValid = (value) => {
      return value.trim().length === 6;
   };

   const {
      value: nameInput,
      hasError: nameHasError,
      inputBlurHandler: nameBlurHandler,
      inputChangeHandler: nameChangeHandler,
      resetInput: nameReset,
   } = useInput(isEmpty);
   const {
      value: streetInput,
      hasError: streetHasError,
      inputBlurHandler: streetBlurHandler,
      inputChangeHandler: streetChangeHandler,
      resetInput: streetReset,
   } = useInput(isEmpty);
   const {
      value: cityInput,
      hasError: cityHasError,
      inputBlurHandler: cityBlurHandler,
      inputChangeHandler: cityChangeHandler,
      resetInput: cityReset,
   } = useInput(isEmpty);
   const {
      value: postCodeInput,
      hasError: postCodeHasError,
      inputBlurHandler: postCodeBlurHandler,
      inputChangeHandler: postCodeChangeHandler,
      resetInput: postCodeReset,
   } = useInput(pinIsValid);

   const confirmOrderHandler = (event) => {
      event.preventDefault();
      const userData = {
         name: nameInput,
         streetName: streetInput,
         zipcode: postCodeInput,
         cityName: cityInput,
      };
      props.onSubmit(userData);
      nameReset();
      cityReset();
      streetReset();
      postCodeReset();
   };

   const nameClasses = `${classes.control} ${
      nameHasError ? classes.invalid : ''
   }`;
   const streetClasses = `${classes.control} ${
      streetHasError ? classes.invalid : ''
   }`;
   const postalCodeClasses = `${classes.control} ${
      postCodeHasError ? classes.invalid : ''
   }`;
   const cityClasses = `${classes.control} ${
      cityHasError ? classes.invalid : ''
   }`;

   return (
      <form className={classes.form} onSubmit={confirmOrderHandler}>
         <div className={nameClasses}>
            <label htmlFor='name'>Your Name</label>
            <input
               type='text'
               id='name'
               value={nameInput}
               onChange={nameChangeHandler}
               onBlur={nameBlurHandler}
            />
            {nameHasError && (
               <p className={classes['error-text']}>name must have valid</p>
            )}
         </div>
         <div className={streetClasses}>
            <label htmlFor='street'>Street</label>
            <input
               type='text'
               id='street'
               value={streetInput}
               onChange={streetChangeHandler}
               onBlur={streetBlurHandler}
            />
            {streetHasError && <p>street must be filled!</p>}
         </div>
         <div className={postalCodeClasses}>
            <label htmlFor='postal'>Postal Code</label>
            <input
               type='text'
               id='postal'
               value={postCodeInput}
               onChange={postCodeChangeHandler}
               onBlur={postCodeBlurHandler}
            />
            {postCodeHasError && <p>postal code should be valid(6digit)</p>}
         </div>
         <div className={cityClasses}>
            <label htmlFor='city'>City</label>
            <input
               type='text'
               id='city'
               value={cityInput}
               onChange={cityChangeHandler}
               onBlur={cityBlurHandler}
            />
            {cityHasError && (
               <p className={classes['error-text']}>city must be valid</p>
            )}
         </div>
         <div className={classes.actions}>
            <button type='button' onClick={props.onCancel}>
               Cancel
            </button>
            <button className={classes.submit}>Confirm</button>
         </div>
      </form>
   );
};

export default Checkout;
