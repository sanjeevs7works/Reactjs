import React, { useReducer } from 'react';

const reducerFunction = (state, action) => {
   if (action.type === 'INPUT') {
      return { value: action.value, isTouched: true };
   }
   if (action.type === 'BLUR') {
      return {
         isTouched: true,
         value: state.value,
      };
   }
   if (action.type === 'RESET') {
      return {
         isTouched: false,
         value: '',
      };
   }

   return {
      isTouched: false,
      value: '',
   };
};
const initialState = {
   value: '',
   isTouched: false,
};

const useInput = (validate) => {
   const [state, dispatch] = useReducer(reducerFunction, initialState);
   const inputIsvalid = validate(state.value);
   const hasError = !inputIsvalid && state.isTouched;
   const inputChangeHandler = (event) => {
      dispatch({
         type: 'INPUT',
         value: event.target.value,
      });
   };
   const inputBlurHandler = () => {
      dispatch({ type: 'BLUR' });
   };
   const resetInput = () => {
      dispatch({ type: 'RESET' });
   };

   return {
      value: state.value,
      hasError,
      inputChangeHandler,
      inputBlurHandler,
      resetInput
   };
};
export default useInput;
