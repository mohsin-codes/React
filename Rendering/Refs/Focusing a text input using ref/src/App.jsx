import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Form = () => {
  const inputRef = useRef('');
  
  function handleClick(){
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef}/>
      <button onClick={handleClick}>
        Focus on the input
      </button>
    </>
  )
}

function App() {

  return (
    <>
      <Form/>
    </>
  )
}

export default App
