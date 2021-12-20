import Button from './Button';
import Card from './Card';
import React from 'react';
import reactDOM from 'react-dom';
import classes from './ErrorModal.module.css';

const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onClick} />;
};
const Overlay = (props) => {
   return (
      <Card className={classes.modal}>
         <header className={classes.header}>
            <h2>{props.title}</h2>
         </header>
         <section className={classes.content}>
            <p>{props.message}</p>
         </section>
         <footer className={classes.actions}>
            <Button onClick={props.onHideError}>Okay</Button>
         </footer>
      </Card>
   );
};
const ErrorModal = (props) => {
   return (
      <React.Fragment>
         {reactDOM.createPortal(
            <Backdrop onClick={props.onHideError} />,
            document.getElementById('backdrop')
         )}
         {reactDOM.createPortal(
            <Overlay
               title={props.title}
               message={props.errorMessage}
               onHideError={props.onHideError}
            />,
            document.getElementById('overlays')
         )}
      </React.Fragment>
   );
};

export default ErrorModal;
