import { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import CartProvider from './store/CartProvider';

function App() {
   const [isShow, setIsShow] = useState(false);
   const onShowCartHandler = () => {
      setIsShow(true);
   };
   const onHideCartHandler = (props) => {
      setIsShow(false);
   };
   return (
      //context provide to all components
      <CartProvider>
         {isShow && <Cart onCartHide={onHideCartHandler} />}
         <Header onCartShow={onShowCartHandler} />
         <main>
            <Meals />
         </main>
      </CartProvider>
   );
}

export default App;
