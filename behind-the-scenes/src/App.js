import React, { useCallback, useState } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
   const [paragraphIsShow, setParagraphIsShow] = useState(false);
   console.log('app is running');
   const showParapraphHandler = useCallback(() => {
      setParagraphIsShow((preState) => !preState);
   }, []);

   return (
      <div className='app'>
         <h1>Hi there!</h1>
         <DemoList isShow={paragraphIsShow} />
         <Button onClick={showParapraphHandler}>Toggle Title</Button>
      </div>
   );
}

export default App;
