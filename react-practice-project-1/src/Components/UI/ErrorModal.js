import { useState } from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css';
const ErrorModal = (props) => {
   const onConfirmHide = () => {
      props.onHideError();
   };
   return (
      <div>
         <div className={classes.backdrop} onClick={onConfirmHide} />
         <Card className={classes.modal}>
            <header className={classes.header}>
               <h2>{props.title}</h2>
            </header>
            <section className={classes.content}>
               <p>{props.errorMessage}</p>
            </section>
            <footer className={classes.actions}>
               <Button onClick={onConfirmHide}>Okay</Button>
            </footer>
         </Card>
      </div>
   );
};
export default ErrorModal;
