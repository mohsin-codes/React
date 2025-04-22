import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const CountdownTimer = () =>{
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const timerRef = useRef(0);
    console.log(time);

}

function App() {

  return (
    <>
      <CountdownTimer />
    </>
  )
}

export default App
