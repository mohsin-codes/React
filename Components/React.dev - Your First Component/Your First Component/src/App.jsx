import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </>
  )
}

export default App


function Profile(){
  return (
    <img 
      src="https://i.imgur.com/MK3eW3Am.jpg" 
      alt="Katherine Johnson" 
    />
  )
}