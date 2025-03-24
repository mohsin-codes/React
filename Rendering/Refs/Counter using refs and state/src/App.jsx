import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

const CounterUsingState = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      You clicked {count} times!
    </button>
  )
}

const CounterUsingRefs = () => {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current = countRef.current + 1;
    console.log(countRef.current);
  }

  return (
    <button onClick={handleClick}>
      You clicked {countRef.current} times!
    </button>
  )
}

function App() {

  return (
    <>
      <CounterUsingState/>
      <br></br>
      <CounterUsingRefs/>
    </>
  )
}

export default App
