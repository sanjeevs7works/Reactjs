import { useSelector } from 'react-redux';

import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Modal from './components/UI/Modal';

function App() {
   const isVisible = useSelector((state) => state.visibleReducer.isVisible);
   return (
      <Layout>
         {isVisible && <Modal />}
         <Products />
      </Layout>
   );
}

export default App;
