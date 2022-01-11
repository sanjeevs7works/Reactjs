# Reactjs

### All the basic project of reactjs from basic to advance level

all this project is created to understand basic react feature

## Let and const

## Arrow functions

## Exports and imports

## Classes

## Classes properties and method

## The spread & Rest Operator

## Destructuring

## Reference and primitive types

## Refreshing array function

### React Basic Knowledge

### Components-

component is basic building block of react , They accept arbitrary inputs
(called “props”) and return React elements describing what should appear on the
screen.

### JSX-

It is called JSX, and it is a syntax extension to JavaScript. We recommend using
it with React to describe what the UI should look like.

`const elemnts=<h1>hello word <h1>;`

## Creating custom components (functional components)-

```
const myFunction=(props)=>{
  return (jsx);
   }
```

## Adding basic styling const

`elements=<h1 style={{color:red}}>hello word<h1>`

## Outputting dynamic data and expression in jsx

```
const name='sanjeev'
const content=<h1>hello {name}</h1>
```

## Working with props

```
const element = <Welcome name="Sara" />;

const Welcome=(props)=>{
  return (<h1>hello {props.name}</h1>);
}

```

## Spliting Component into multiple components

spliting your big chunk of code into multiple function to make function neat and
clean

use **import** keywords for importing function or variable
`import Filename from './path'`

use **export** keywords for exporting function or variable

`default exports Filename`

## Listening to events and working with event handler

event name should be camelCase and pass event handler function as reference

```
const activateLasers=()=>{
  return someting
}
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

most common event used in react

-  onClick()
   -  The onchange event occurs when the value of an element has been changed.
-  onSubmit()

   -  ```
      submitHandler(event){
        event.defaultPrevent();
      }
       <form onSubmit={submitHandler}></form>
      ```

-  onChange() -The onchange event occurs when the value of an element has been
   changed.
-  onBlur() -The onblur event occurs when an object loses focus.The onblur event
   is most often used with form validation code (e.g. when the user leaves a
   form field).

## Working with state(useState() hooks)

`const [state,setState]=useState(initialValue);` `state` - its current value
between re-renders, and provide the most recent one to our function.
`setState()`-his is a way to “preserve” some values between the function calls

intialValue be a any value(number,string,boolean,array,object,null ,undefinded)

## Form Input

```
const [name,setName]=useState('');
const onChangeHandler=(event)=>{
  setState(event.target.value);
}
const submitHandle=(e)=>{
   e.defaultPrevent();
}

<form onSubmit={submitHandler}>
  <label>
    Name:
    <input type="text" name="name" onChange={onChangeHandler}/>
  </label>
  <input type="submit" value="Submit" />
</form>
```

## working with multiple states

declare multiple state independently,as you need const []=useState(); const
[]=useState();

## Using one state Instead

```
const [userInput,setUserInput]=useState({name:'',value:0});

setUserInput({...userInput,value:event.target.value});
```

## Updating state depends on previous state

```
const [enteredName,setEnteredName]=useState('');

setEnteredName((preState)=>{
  return {...preState,name:event.target.value}
})

```

## Handling form submission and Two-way binding

```
const [enteredName,setEnteredName]=useState('');
const onChangeHandler=(e)=>{
  setEnteredName(e.target.value);
}
const submitHandle=(e)=>{
   e.defaultPrevent();
   setEnteredName('');
}

<form onSubmit={submitHandler}>
  <label>
    Name:
    <input type="text" name="name" value={enteredName} onChange={onChangeHandler}/>
  </label>
  <input type="submit" value="Submit" />
</form>

```

## Child to parent component commucaton(State-up)

```
<Expense onHide={onHideHandler}/>
const Expense=(props)=>{


  const submitHandle=(e)=>{
   e.defaultPrevent();
   const name={
     name:e.target.value
   }
    props.onHide(name);
   setEnteredName('');
}

<form onSubmit={submitHandler}>
  <label>
    Name:
    <input type="text" name="name" value={enteredName} onChange={onChangeHandler}/>
  </label>
  <input type="submit" value="Submit" />
</form>
}
```

## Rendering list of data

```
const items=[{name:'sanjeev',age:25},{name:'rahul',age:24}];
<ul>{items.map(item=>{<li>{item.name}</li>})}<ul>
```

## Using stateful lists

```
const items=[{name:'sanjeev',age:25},{name:'rahul',age:24}];
const [listItems,setListItems]=useState(items);

<ul>{listItems.map(item=>{<li>{item.name}</li>})}<ul>
```

## Concepts of keys

-  Keys help React identify which items have changed, are added, or are removed.
   Keys should be given to the elements inside the array to give the elements a
   stable identity

## Conditional content

```
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

ReactDOM.render(
  // Try changing to isLoggedIn={true}:
  <Greeting isLoggedIn={false} />,
  document.getElementById('root')
);
```

## Dynamic styling

`<div className={props.className}><div>`

## Dynamic inline style

`<h1 style={{color:`${isValid?'red':''}`}}></h1>`

## Styled components

## Styled components dynamic props and media queries

## Css modules

`import style from './path';` every class is properties of style

### access style properties

`style.classname` if class name without hyphen(-) `style['class-name']`if class
name have hyphen(-) `<div className={style.classname}></div>`

## Dynamic styles with css modules

<div className={`${isValid?style.classname:''}`></div>

## Creating reusable button

```
const Button=(props)=>{
return <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}>{props.children}</button>
}
```

## Creating reusable card

```
import classes from './Card.module.css';
const Card = (props) => {
   const style = `${classes.card} ${props.className}`;
   return <div className={style}>{props.children}</div>;
};
export default Card;

```

## Creating reusable input

```
import React from 'react';
import classes from './Input.module.css';
const Input = React.forwardRef((props, ref) => {
   return (
      <div className={classes.input}>
         <label htmlFor={props.input.id}>{props.label}</label>
         <input ref={ref} {...props.input} />
      </div>
   );
});

export default Input;
```

## Managing the User input state

## Modal

```
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

```

# Working with fragment ,portal and refs

## Creating custom wrapper component

```
const Wrapper=(props)=>{
  return <div>{props.children}</div>
}
```

## React fragment

to wrap 2 or more than element in single to avoid jsx limitation builtin react

wrapper method

-  <>{...}</>
-  <React.Fragment>{...}</React.Fragment>
-  <Fragment>{...}<Fragment>

## React portals

-  Portals provide a first-class way to render children into a DOM node that
   exists outside the DOM hierarchy of the parent component.
   `{ReactDOM.createPortal(<h1>out of dom render</h1>,document.getElementById('id'))}`

## Working with refs

Refs provide a way to access DOM nodes or React elements created in the render
method.

### There are a few good use cases for refs:

-  Managing focus, text selection, or media playback.
-  Triggering imperative animations.
-  Integrating with third-party DOM libraries.
-  Avoid using refs for anything that can be done declaratively.

## useRef()

```
const inputRef=useRef();
<div ref={inputref}></div>

```

## Controlled vs uncontrolled

# components Handling side effects,Reducer and context api

## Side effects

Data fetching, setting up a subscription, and manually changing the DOM in React
components are all examples of side effects. Whether or not you’re used to
calling these operations “side effects” (or just “effects”), you’ve likely
performed them in your components before.

`useEffect()`-

### useEffect without cleanup

```
useEffect(()=>{

},[dependencies]);
```

### useEffect with cleanup

```
useEffect(()=>{

return ()=>{

} },[dependencies])
```

## [useReducer and Reducers in general](#use-reducer)
<a name='use-reducer'>
useReducer is usually preferable to useState when you have complex state logic
that involves multiple sub-values or when the next state depends on the previous
one. useReducer also lets you optimize performance for components that trigger
deep updates because you can pass dispatch down instead of callbacks.</a>

```
const reducerFunction=>(state,action)=>{
if(action.type=='ADD'){
  someaction
}
}
const [state,dispatch]=useReducer(reducerFunction,initialState,callback);


dispatch({action:'ADD',value:})
```

## React Context

In a typical React application, data is passed top-down (parent to child) via
props, but such usage can be cumbersome for certain types of props (e.g. locale
preference, UI theme) that are required by many components within an
application. Context provides a way to share values like these between
components without having to explicitly pass a prop through every level of the
tree.

## useContext api

## forwarding Ref Behind the scenes

## Re-evaluation and re-rendering

## Prevent unnecessary Re-evaluations with React.memo()

## Preventing function Re-creation with useCallback()

## useCallback() and dependencies

## useMemo() Class based components

## creating class based components

## working with state and events

## component lifecycle method

## class-based component and context

```

```
