import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  function handleClick(){
    alert('You clicked me!');
  }

  return (
    <>
      <button onClick={handleClick}>
        I do something
      </button>
    </>
  )
}

export default App
