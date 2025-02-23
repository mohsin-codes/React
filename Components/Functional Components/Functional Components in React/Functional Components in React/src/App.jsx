import './App.css'
import React, { useState} from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setTimeout(
      () => setCount(currentCount => currentCount + 1)
    , 1000)
  }

  const handleDecrement = () => {
    setTimeout(
      () => setCount(currentCount => currentCount - 1)
    , 1000)
  }

  return (
    <div>
      <h1>{count}</h1>

      <Button handleClick={handleIncrement}>Increment</Button>
      <Button handleClick={handleDecrement}>Decrement</Button>
    </div>
  )
}

const Button = ({handleClick, children}) => (
  <button
    type='button'
    onClick={handleClick}>  
      {children}
  </button>
)

export default App;

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
