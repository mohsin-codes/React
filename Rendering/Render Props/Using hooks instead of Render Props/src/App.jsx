import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const useMousePosition = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const updatePostion = (event) => {
      setPosition({x: event.clientX, y: event.clientY});
    }
    window.addEventListener("mousemove", updatePostion);
    return () => window.removeEventListener("mousemove", updatePostion);
  }, []);

  return position;
}

function App() {
  const {x, y} = useMousePosition();
  return (
    <>
      <h2>Mouse Position : {x}, {y}</h2>
    </>
  )
}

export default App
