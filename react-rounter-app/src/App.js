import { Route, Routes } from 'react-router-dom';
import Product from './screens/Product';
import Welcome from './screens/Welcome';
import classes from './App.module.css';

function App() {
   return (
      <div className={classes.app}>
         <ul>
            <li>
               <a href='/welcome'>Welcome</a>
            </li>
            <li>
               <a href='/product'>Product</a>
            </li>
         </ul>
         <Routes>
            <Route path='/product' element={<Product />} />
            <Route path='/welcome' element={<Welcome />} />
         </Routes>
      </div>
   );
}

export default App;
