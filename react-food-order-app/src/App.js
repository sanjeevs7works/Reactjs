import { Fragment, useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

function App() {
   const [isShow, setIsShow] = useState(false);
   const onShowCartHandler = () => {
      setIsShow(true);
   };
   const onHideCartHandler = (props) => {
      setIsShow(false);
   };
   return (
      <Fragment>
         {isShow && <Cart onCartHide={onHideCartHandler} />}
         <Header onCartShow={onShowCartHandler} />
         <main>
            <Meals />
         </main>
      </Fragment>
   );
}

export default App;
