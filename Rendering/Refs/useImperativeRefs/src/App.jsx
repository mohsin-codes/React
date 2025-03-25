import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'

function MyInput({ref}){
  return <input ref={ref}/>
}

function MyForm(){
  const inputRef = useRef(null);

  function handleClick(){
    inputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={inputRef}/>
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  )
}

function App() {

  return (
    <>
      <MyForm />
    </>
  )
}

export default App
