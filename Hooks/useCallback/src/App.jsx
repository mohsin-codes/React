import React, { useCallback, useState } from 'react'
import './App.css'

const Child = React.memo(({onClick}) => {
  console.log("Child rendered");
  return <button onClick={onClick}>Click me!</button>
})

function Counter(){
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
      console.log("Clicked!");
    })

    return (
      <>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <Child onClick={handleClick}/>
      </>
    )
}


function App() {

  return (
    <>
      <Counter />
    </>
  )
}

export default App
