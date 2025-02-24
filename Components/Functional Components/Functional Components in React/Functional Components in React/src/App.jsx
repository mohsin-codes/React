import './App.css'
import React, {useState, memo, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'

const App = () => {
  const [greeting, setGreeting] = useState(
    'Hello Function Component!'
  );

  const handleChange = event => setGreeting(event.target.value);
  return (
    <Headline headline={greeting} onChangeHeadline={handleChange}/>
  )
}

const Headline = ({headline, onChangeHeadline}) => ( //: {headline : string, onChangeHeadline: Function}) 
  <div>
    <h1>{headline}</h1>

    <input type='text' value={headline} onChange={onChangeHeadline} />
  </div>
);

export default App;
// Using PropTypes
// const App = () => {
//   const greeting = 'Hello Function Component';

//   return <Headline value={greeting} />
// }

// const Headline = ({value}) => {
//   return <h1>{value}</h1>;
// }

// Headline.propTypes = {
//   value : PropTypes.string.isRequired,
// }

// export default App;


// Using useRef Hook
// const App = () => {
//   const [greeting, setGreeting] = useState('Hello React!');

//   const handleChange = event => setGreeting(event.target.value);

//   return (
//     <div>
//       <h1>{greeting}</h1>

//       <Input value={greeting} />
//     </div>
//   )
// }

// const Input = ({value, handleChange}) =>{
//   const ref = useRef();

//   useEffect(() => ref.current.focus(), []);

//   return (
//     <input 
//       type="text"
//       value={value}
//       onChange={handleChange}
//       ref={ref} />
//     )
// }

// export default App;
// This example shows how we can use multiple files to store and manage the components.
// const App = () => {
//   const greeting = 'Hello Function Component!';

//   return <Headline value={greeting}/>
// }

// export default App;

// // in this we are using the 'Memo' library in react which helps 
// // in the rerendering of the component of the application
// const App = () => {
//   const [greeting, setGreeting] = useState('Hello React!');
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setCount(currentCount  => currentCount + 1);
//   }

//   const handleDecrement = () => {
//     setCount(currentCount => currentCount - 1);
//   }

//   const handleChange = event => setGreeting(event.target.value);

//   return (
//     <div>
//       <input type="text" onChange={handleChange}/>

//       <Count count={count} />

//       <button type='button' onClick={handleIncrement}>Increment</button>
//       <button type='button' onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// };

// const Count = memo(({count}) => {
//   console.log('Does it (re)render?');

//   return <h1>{count}</h1>
// });

// export default App;

// using localStorage for storing the state of a component 
// and using 'useEffect()' hook to only change when there is an actual change in the state
// const App = () => {
//   const initialCount = +localStorage.getItem('storageCount') || 0;
//   const [count, setCount] = useState(initialCount);

//   const handleIncrement = () => {
//     setCount(currentCount  => currentCount + 1);
//   }

//   const handleDecrement = () => {
//     setCount(currentCount => currentCount - 1);
//   }

//   useEffect(() => localStorage.setItem('storageCount', count), [count]);

//   return (
//     <div>
//       <h1>{count}</h1>

//       <button type='button' onClick={handleIncrement}>Increment</button>
//       <button type='button' onClick={handleDecrement}>Decrement</button>
//     </div>
//   );
// };

// export default App;

//Async functions
// const App = () => {
//   const [count, setCount] = useState(0);

//   const handleIncrement = () => {
//     setTimeout(
//       () => setCount(currentCount => currentCount + 1)
//     , 1000)
//   }

//   const handleDecrement = () => {
//     setTimeout(
//       () => setCount(currentCount => currentCount - 1)
//     , 1000)
//   }

//   return (
//     <div>
//       <h1>{count}</h1>

//       <Button handleClick={handleIncrement}>Increment</Button>
//       <Button handleClick={handleDecrement}>Decrement</Button>
//     </div>
//   )
// }

// const Button = ({handleClick, children}) => (
//   <button
//     type='button'
//     onClick={handleClick}>  
//       {children}
//   </button>
// )

// export default App;

//Using async in Component function
// const App = () => {
//   const sayHello = () => {
//     setTimeout(() => console.log("Hello"),1000);
//   }

//   return <Button handleClick={sayHello} />
// }

// const Button = ({handleClick}) => (
//   <button 
//     type='button'
//     onClick={handleClick}>
//     Button
//   </button>
// )

// export default App;

//Override the component function
// const App = () => {
//   const sayHello = () => console.log("Hello");

//   return <Button handleClick={sayHello} />
// };

// const Button = ({handleClick}) => {
//   const sayDefault = () => console.log("Default");

//   const onClick = handleClick || sayDefault;

//   return (
//     <button 
//       type='button'
//       onClick={onClick}>
//         Button
//       </button>
//   );
// };

// export default App;

//using EventHandler and Callback Function
// const App = () => {
//   const [greeting, setGreeting] = useState(
//     'Hello Function Component!'
//   );
  
//   const handleChange = (event) => setGreeting(event.target.value);

//   return (
//     <>
//       <Headline headline={greeting}/>
//       <Input value={greeting} onChangeInput={handleChange}>
//         Set Greetings: 
//       </Input>
//     </>
//   )
// }

// const Headline = ({headline}) => <h1>{headline}</h1>;

// const Input = ({value, onChangeInput, children}) =>(
//   <label>
//     {children} 
//     <input 
//           type="text"
//           value={value}
//           onChange={onChangeInput} />
//   </label>
// )

// export default App;



/// Using Arrow (Lambda) Functions in ES6
// const App = () => {
//     const greeting = 'Hello Function Component!';
//     const subHeading = 'Another generic sub heading!';
//     //using another component containing props in one component
//     return (
//       <>
//         <Headline value={greeting}/>
//         <Heading value={subHeading}/>
//       </>
//     )
// }

// const Headline = (props) => {
//   //utilizing props
//   return <h1>{props.value}</h1>
// }

// const Heading = ({value}) => {
//   return <h2>{value}</h2>
// }

// export default App

//-------------------- Below code contains code defined in generic function format 
//------------ Above code is refactored using the arrow method or Lambda functions used in ES6 
// function App() {
//   const greeting = 'Hello Function Component!';
//   const subHeading = 'Another generic sub heading!';
//   //using another component containing props in one component
//   return (
//     <>
//       <Headline value={greeting}/>
//       <Heading value={subHeading}/>
//     </>
//   )
// }

// function Headline(props){
//   //utilizing props
//   return <h1>{props.value}</h1>
// }

// //another component using the destructuring to destructure the elements from the props passed in the component
// function Heading({value}){
//   return <h2>{value}</h2>
// }
