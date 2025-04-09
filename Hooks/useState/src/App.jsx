import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>Increase the count</button>
    </>
  )
}

export default App
