import { Component } from 'react';
import { useSelector, useDispatch, connect } from 'react-redux';

import { counterAction } from '../store/counter';
import classes from './Counter.module.css';

const Counter = () => {
   const counter = useSelector((state) => state.counter.counter);
   const show = useSelector((state) => state.counter.showCounter);
   const dispatch = useDispatch();

   const incrementHandler = () => {
      dispatch(counterAction.increment());
   };
   const decrementHandler = () => {
      dispatch(counterAction.decreament());
   };
   const increaseHandler = () => {
      dispatch(counterAction.increase(5));
   };

   const toggleCounterHandler = () => {
      dispatch(counterAction.toggle());
   };

   return (
      <main className={classes.counter}>
         <h1>Redux Counter</h1>
         {show && <div className={classes.value}>{counter}</div>}
         <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>IncrementBy5</button>

            <button onClick={decrementHandler}>Decrement</button>
         </div>
         <button onClick={toggleCounterHandler}>Toggle Counter</button>
      </main>
   );
};

export default Counter;

// use redux in class based component
// class Counter extends Component {
//    incrementHandler() {
//       this.props.increment();
//    }
//    decrementHandler() {
//       this.props.decrement();
//    }

//    render() {
//       return (
//          <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{this.props.counter}</div>
//             <div>
//                <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//                <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//             </div>
//             {/* <button onClick={toggleCounterHandler}>Toggle Counter</button> */}
//          </main>
//       );
//    }
// }

// const mapStateToProps = (state) => {
//    return { counter: state.counter };
// };
// const mapDispatchToProps = (dispatch) => {
//    return {
//       increment: () => dispatch({ type: 'increment' }),
//       decrement: () => dispatch({ type: 'decrement' }),
//    };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
