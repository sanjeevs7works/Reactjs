import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

const AddUser = (props) => {
   const [enteredUsername, setUsername] = useState('');
   const [enteredUserAge, setUserAge] = useState('');
   const [error, setError] = useState();

   const usernameChangeHandler = (e) => {
      setUsername(e.target.value);
   };
   const userageChangeHandler = (e) => {
      setUserAge(e.target.value);
   };
   const addUserHandler = (event) => {
      event.preventDefault();
      if (
         enteredUserAge.trim().length === 0 &&
         enteredUserAge.trim().length === 0
      ) {
         setError({
            title: 'input invalid',
            message: 'please enter valid name and age !.',
         });
         return;
      } else if (enteredUserAge < 1) {
         setError({
            title: 'input invalid',
            message: 'Please enter a valid age(>0).',
         });
      } else {
         props.onAddUser(enteredUsername, enteredUserAge);
         setUsername('');
         setUserAge('');
      }
   };
   const hideHandler = () => {
      setError(null);
   };
   return (
      <React.Fragment>
         {error && (
            <ErrorModal
               title={error.title}
               errorMessage={error.message}
               onHideError={hideHandler}
            />
         )}

         <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
               <label>Username</label>
               <input
                  type='text'
                  value={enteredUsername}
                  onChange={usernameChangeHandler}
               />

               <label>Age</label>
               <input
                  type='number'
                  value={enteredUserAge}
                  onChange={userageChangeHandler}
               />
               <Button type='submit'>Add User</Button>
            </form>
         </Card>
      </React.Fragment>
   );
};

export default AddUser;
