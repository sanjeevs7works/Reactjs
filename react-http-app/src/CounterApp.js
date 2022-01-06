import React, { Fragment } from 'react';
import BackwardCounter from './components/Counter/BackwardCounter';
import ForwardCounter from './components/Counter/ForwardCounter';

const CounterApp = () => {
   return (
      <Fragment>
         <section>
            <ForwardCounter />
         </section>
         <section>
            <BackwardCounter />
         </section>
      </Fragment>
   );
};
export default CounterApp;
