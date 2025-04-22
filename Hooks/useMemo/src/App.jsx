import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  const slowSquare = (num) => {
    console.log("Calculating...");
    for(let i=0; i<=1e9; i++)
      return num * num;
  };

  const squared = useMemo(()=> slowSquare(number), [number])
  console.log(squared);

  return (
    <>
      <div>
        <h2>Square: {squared}</h2>
        <input 
          type='number'
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
          />
          <br/>
          <button onClick={() => setCounter(counter+1)}>Re-render App ({counter})</button>
      </div>
    </>
  )
}

export default App
