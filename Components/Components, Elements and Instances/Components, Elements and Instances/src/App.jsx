import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/*<Greeting /> -> is the react element */}
      <Greeting text="Hello World"/>

      {/* These are the instances */} 
      <Greeting text="This is instance 1"/>
      <Greeting text="This is instance 2"/>
    </>
  )
}

export default App

//Component
const Greeting = ({ text }) =>{
  return <p>{text }</p>
}