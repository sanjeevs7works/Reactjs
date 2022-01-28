import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { viewAction } from '../../store/ui-slice';
import Cart from '../Cart/Cart';
import Card from './Card';

import classes from './Modal.module.css';

const Backdrop = (props) => {
   const dispatch = useDispatch();
   const cartShowHandler = () => {
      dispatch(viewAction.show());
   };
   return <div className={classes.backdrop} onClick={cartShowHandler} />;
};
const ModalOverlay = (props) => {
   return (
      <Card className={classes.modal}>
         <Cart />
      </Card>
   );
};
const ovelayId = document.getElementById('overlay');
const Modal = (props) => {
   return (
      <Fragment>
         {createPortal(<Backdrop />, ovelayId)}
         {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, ovelayId)}
      </Fragment>
   );
};
export default Modal;
