import { Fragment } from 'react';
import reactDom from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onHide} />;
};
const ModalOverlays = (props) => {
   return <div className={classes.modal}>{props.children}</div>;
};
const Modal = (props) => {
   return (
      <Fragment>
         {reactDom.createPortal(
            <Backdrop onHide={props.onHide} />,
            document.getElementById('overlays')
         )}
         {reactDom.createPortal(
            <ModalOverlays>{props.children}</ModalOverlays>,
            document.getElementById('overlays')
         )}
      </Fragment>
   );
};
export default Modal;
