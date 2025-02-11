import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Welcome to my App!</h1>
      <MyButton />
    </>
  )
}

export default App


function MyButton(){
  return (
    <button>
      I'm a button!
    </button>
  )
}