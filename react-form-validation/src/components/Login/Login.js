import React, { useContext, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/auth-context';

//Email Reducer function
const emailReducer = (state, action) => {
   if (action.type === 'USER_INPUT') {
      return { value: action.value, isValid: action.value.includes('@') };
   }
   if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.includes('@') };
   }
   return { value: '', isValid: true };
};

//Password Reducer Function
const passReducer = (state, action) => {
   if (action.type === 'INPUT_ENTER') {
      return { value: action.value, isValid: action.value.trim().length >= 6 };
   }
   if (action.type === 'INPUT_BLUR') {
      return { value: state.value, isValid: state.value.trim().length >= 6 };
   }
   return { value: '', isValid: null };
};
const Login = (props) => {
   const ctx = useContext(AuthContext);
   //state management using
   //a)useState() hook
   const [formIsValid, setFormIsValid] = useState(false);

   //b) useReducer()
   //email reducer
   const [emailState, dispatchEmail] = useReducer(emailReducer, {
      value: '',
      isValid: null,
   });
   //password reducer
   const [passState, dispatchPass] = useReducer(passReducer, {
      value: '',
      isValid: null,
   });

   //email onchange handler function
   const emailChangeHandler = (event) => {
      dispatchEmail({ type: 'USER_INPUT', value: event.target.value });

      setFormIsValid(emailState.isValid && passState.isValid);
   };

   //password onChange handler function
   const passwordChangeHandler = (event) => {
      dispatchPass({ type: 'INPUT_ENTER', value: event.target.value });

      setFormIsValid(emailState.isValid && passState.isValid);
   };
   //email onBlur() handler function
   const validateEmailHandler = () => {
      dispatchEmail({ type: 'INPUT_BLUR' });
   };
   //password onBlur() handler function
   const validatePasswordHandler = () => {
      dispatchPass({ type: 'INPUT_BLUR' });
   };

   //form submit handler function
   const submitHandler = (event) => {
      event.preventDefault();
      ctx.onLogin(emailState.value, emailState.value);
   };

   return (
      <Card className={classes.login}>
         <form onSubmit={submitHandler}>
            <div
               className={`${classes.control} ${
                  emailState.isValid === false ? classes.invalid : ''
               }`}
            >
               <label htmlFor='email'>E-Mail</label>
               <input
                  type='email'
                  id='email'
                  value={emailState.value}
                  onChange={emailChangeHandler}
                  onBlur={validateEmailHandler}
               />
            </div>
            <div
               className={`${classes.control} ${
                  passState.isValid === false ? classes.invalid : ''
               }`}
            >
               <label htmlFor='password'>Password</label>
               <input
                  type='password'
                  id='password'
                  value={passState.value}
                  onChange={passwordChangeHandler}
                  onBlur={validatePasswordHandler}
               />
            </div>
            <div className=''></div>
            <div className={classes.actions}>
               <Button
                  type='submit'
                  className={classes.btn}
                  disabled={!formIsValid}
               >
                  Login
               </Button>
            </div>
         </form>
      </Card>
   );
};

export default Login;
